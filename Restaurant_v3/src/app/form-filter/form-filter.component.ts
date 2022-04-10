import { Component, OnInit } from '@angular/core';
import { Options,LabelType } from 'ng5-slider';
import { CurrenciesService } from '../currencies.service';
import { FilterService } from '../filter.service';
import { ListOfDishesService } from '../list-of-dishes.service';



@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {
  name?:string;
  searchName?:string;
  searchCategory :string[]=[];
  searchCuisine:string[]=[];
  searchRating:number[]=[];

  constructor(public Dishes:ListOfDishesService,public filterData: FilterService,public currencyData:CurrenciesService) { }

  lValue:number = Math.floor(Number((this.Dishes.getMinPrice()*this.currencyData.getValue()).toFixed(2)));
  hValue:number = Math.ceil(Number((this.Dishes.getMaxPrice()*this.currencyData.getValue()).toFixed(2)));

  options: Options = {
    floor:0,
    ceil:50,
    translate: (value : number,label: LabelType) :string =>{
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b>' + this.currencyData.getSymbol() + value;
        case LabelType.High:
          return '<b>Max price:</b>' + this.currencyData.getSymbol() + value;
        default:
          return this.currencyData.getSymbol() + value;
      }
    }
  }

  ngOnInit(): void { }

}
