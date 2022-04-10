import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListOfDishesService } from '../list-of-dishes.service';
import { Dish } from '../Dish';
import { CurrenciesService } from '../currencies.service';
import { ShopListService } from '../shop-list.service';
import { DatabaseService } from '../database.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  me!:Dish;
  myId:any;
  wasRated = false;
  currentPhotoIndex:number=0;
  commentss:any=[];
  wantToComment=false;

  constructor(private route: ActivatedRoute,
    private listOfDishesService: ListOfDishesService,
    private location: Location,
    public Dishes:ListOfDishesService,public currencies:CurrenciesService ,public ShopList:ShopListService,
    private databaseService:DatabaseService,public authService:AuthService) {
     }

  ngOnInit(): void {
    this.myId = this.route.snapshot.paramMap.get('id');
    this.databaseService.getCollectionItem(this.myId).subscribe(dish => {
      this.me = dish;
    })
  }
  
  wantToComm(){
    this.wantToComment = !this.wantToComment;
  }

  prevPhoto(){
    this.currentPhotoIndex --;
    if(this.currentPhotoIndex===-1){
      this.currentPhotoIndex = this.me.images.length-1;
    }
  }

  nextPhoto(){
    this.currentPhotoIndex ++;
    if(this.currentPhotoIndex === this.me.images.length){
      this.currentPhotoIndex = 0;
    }
  }
  notInShopList(){
    if(this.me){
      return this.ShopList.dishNotInList(this.me.name);
    }
    return false;
  }

  remove(){
    if(this.me){
      this.Dishes.incrementQuantity(this.myId,this.me.quantity);
      this.ShopList.remove(this.me.name,this.me.price);
    }
  }
  add(){
    if(this.me){
      this.Dishes.decrementQuantity(this.myId,this.me.quantity);
      this.ShopList.add(this.me.name,this.me.price);
    }
  }

  rate(number:number){
    if(this.me){
        this.Dishes.rateDish(this.myId,this.me.rating,this.me.ratesCounter,number);
        if(this.authService.userDetails){
          this.Dishes.rateHistoryUpdate(this.myId,this.authService.userDetails?.uid ,number)
        }
      this.wasRated=true;
    }
  }
  
  goBack(){
    this.location.back();
  }

  messages:string[]=[];
  model={nick:'',title:'',text:'',date:''};
  onSubmit(){
    this.messages=[];
    let valid:boolean = true;
    if(this.model.nick.length == 0){
      valid = false;
      this.messages.push('Nick jest wymagany.')
    }
    if(this.model.title.length == 0){
      valid = false;
      this.messages.push('Tytuł jest wymagany.')
    }
    if(this.model.text.length == 0){
      valid = false;
      this.messages.push('Tekst jest wymagany.')
    }
    else{
      if(this.model.text.length <= 50){
        valid=false;
        this.messages.push('Tekst jest za krótki.')
      }
      if(this.model.text.length >= 500){
        valid=false;
        this.messages.push('Tekst jest za długi.')
      }
    }
    if(valid){
      this.newComment();
      this.model = {nick:'',title:'',text:'',date:''};
    }
  }
  newComment(){
    if(this.me){
      this.databaseService.addComment(this.myId,this.model);

    }
  }

  getComments(){
    this.commentss = this.databaseService.getComments(this.myId);
    return this.commentss;
  }

  canRate(uid:string):boolean{
    if(this.me){
      return this.Dishes.canUserRate(uid,this.myId);
    }
    return false;
  }
}
