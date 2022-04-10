import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';
import { ListOfDishesService } from '../list-of-dishes.service';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
