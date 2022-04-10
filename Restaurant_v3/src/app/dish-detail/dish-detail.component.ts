import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListOfDishesService } from '../list-of-dishes.service';
import { Dish } from '../Dish';
import { CurrenciesService } from '../currencies.service';
import { ShopListService } from '../shop-list.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  me!:Dish|undefined;
  wasRated = false;

  constructor(private route: ActivatedRoute,
    private listOfDishesService: ListOfDishesService,
    private location: Location,
    public Dishes:ListOfDishesService,public currencies:CurrenciesService ,public ShopList:ShopListService) { }

  ngOnInit(): void {
    this.getDish();
  }

  getDish():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.me=this.listOfDishesService.getDish(id);
  }

  notInShopList(){
    if(this.me){
      return this.ShopList.dishNotInList(this.me.name);
    }
    return false;
  }


  remove(){
    if(this.me){
      this.Dishes.incrementQuantity(this.me.id);
      this.ShopList.remove(this.me.name,this.me.price);
    }
  }
  add(){
    if(this.me){
      this.Dishes.decrementQuantity(this.me.id);
      this.ShopList.add(this.me.name,this.me.price);
    }
  }

  rate(number:number){
    if(this.me){
        this.Dishes.rateDish(this.me.id,number);
      this.wasRated=true;
    }
  }
  
  goBack(){
    this.location.back();
  }

  messages:string[]=[];
  model:Comment={nick:'',title:'',text:'',date:''};
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
    let cmt:string[] =[];
    cmt.push(this.model.nick);
    cmt.push(this.model.title);
    cmt.push(this.model.text);
    if(this.model.date && this.model.date.length > 0){
      cmt.push(this.model.date);
    }
    if(this.me){
      this.listOfDishesService.addComment(this.me?.id,cmt);
    }
  }
}
