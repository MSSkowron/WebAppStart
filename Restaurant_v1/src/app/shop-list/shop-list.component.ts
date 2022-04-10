import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { ListOfDishesService } from '../list-of-dishes.service';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService,public ShopList:ShopListService) { }

  ngOnInit(): void {
  }

}
