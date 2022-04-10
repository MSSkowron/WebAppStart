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
  @Input() quantity!:number;
  @Input() price!:number;
  @Input() images!:string[];
  @Input() id!:number;

  constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService ,public ShopList:ShopListService) {
  }

  currencyValue = this.currencies.getValue();
  currencySymbol = this.currencies.getSymbol();

  ngOnInit(): void {
  }

  isInMostExpensive():boolean{
    return this.Dishes.mostExpensive().indexOf(this.id) > -1;
  }
  isInLeastExpensive():boolean{
    return this.Dishes.leastExpensive().indexOf(this.id) > -1;
  }

  add(){
    this.Dishes.decrementQuantity(this.id);
    this.ShopList.add(this.name,this.price);
  }

  remove(){
    this.Dishes.incrementQuantity(this.id);
    this.ShopList.remove(this.name,this.price);
  }

  removeDish(){
    this.ShopList.shopListDishRemoval(this.name,this.price);
    this.Dishes.removeDish(this.id);
  }

  notInShopList(){
    return this.ShopList.dishNotInList(this.name);
  }
}
