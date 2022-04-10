import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { FilterService } from '../filter.service';
import { ListOfDishesService } from '../list-of-dishes.service';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  public constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService, public ShopList:ShopListService,public filterData:FilterService) {}

  ngOnInit(): void {
  }

  add(event:any){
    let x = this.Dishes.dishList.find(y => y.name === event);
    x!.quantity--;
    this.ShopList.add(event,x?.price);

  }
  remove(event:any){
    let x = this.Dishes.dishList.find(y => y.name === event);
    x!.quantity++;
    this.ShopList.remove(event,x?.price);
  }

  removeDish(event:any){
    for(let i=0;i<this.Dishes.dishList.length;i++){
      if(this.Dishes.dishList[i].name===event){
        let price = this.Dishes.dishList[i].price;
        this.ShopList.shopListDishRemoval(event,price);
        this.Dishes.removeDish(event);
      }
    }
  }
  dollarButton(){
    this.currencies.changeCurrency('usd');
  }
  euroButton(){
    this.currencies.changeCurrency('euro');
  }
}
