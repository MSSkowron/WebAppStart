import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { FilterService } from '../filter.service';
import { ListOfDishesService } from '../list-of-dishes.service';
import { ShopListService } from '../shop-list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  p: number = 1;
  public constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService, public ShopList:ShopListService,public filterData:FilterService,private location: Location) {}
  ngOnInit(): void {
  }
  
  dollarButton(){
    this.currencies.changeCurrency('usd');
  }
  euroButton(){
    this.currencies.changeCurrency('euro');
  }
  goBack(){
    this.location.back();
  }
}
