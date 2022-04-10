import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrenciesService } from 'src/app/currencies.service';
import { ListOfDishesService } from 'src/app/list-of-dishes.service';
import { ShopListService } from 'src/app/shop-list.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() name!:string
  @Input() cuisine!: string;
  @Input() type!: string;
  @Input() category!:string;
  @Input() ingredients!:string[];
  @Input() quantity!:number;
  @Input() price!:number;
  @Input() description!:string;
  @Input() images!:string[];
  @Input() rating!:number;
  @Input() mostExpensiveDishes!:string[];
  @Input() leastExpensiveDishes!:string[];

  @Output() addToOrder = new EventEmitter<string>();
  @Output() removeFromOrder = new EventEmitter<string>();
  @Output() removeDishFromList = new EventEmitter<string>();
  @Output() addRating = new EventEmitter<string>();

  constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService ,public ShopList:ShopListService) {
  }

  wasRated = false;
  currencyValue = this.currencies.getValue();
  currencySymbol = this.currencies.getSymbol();

  ngOnInit(): void {
  }

  isInMostExpensive():boolean{
    return this.mostExpensiveDishes.indexOf(this.name) > -1
  }
  isInLeastExpensive():boolean{
    return this.leastExpensiveDishes.indexOf(this.name) > -1
  }

  add(name:string){
    this.addToOrder.emit(name);
  }

  remove(name:string){
    this.removeFromOrder.emit(name);
  }

  removeDish(name:string){
    this.removeDishFromList.emit(name);
  }

  notInShopList(){
    return this.ShopList.dishNotInList(this.name);
  }
  
  rate(number:number){
    if(this.rating===0){
      this.rating=number;
    }else{
      this.rating=(this.rating+number)/2
    }
    this.wasRated=true;
  }
}
