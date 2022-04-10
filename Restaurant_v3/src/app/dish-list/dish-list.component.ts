import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { Dish } from '../Dish';
import { FilterService } from '../filter.service';
import { ListOfDishesService } from '../list-of-dishes.service';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  p: number = 1;
  public constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService, public ShopList:ShopListService,public filterData:FilterService) {}

  ngOnInit(): void {}

  dollarButton(){
    this.currencies.changeCurrency('usd');
  }
  euroButton(){
    this.currencies.changeCurrency('euro');
  }
}
