import { Injectable } from '@angular/core';
import { CurrenciesService } from './currencies.service';
import { ListOfDishesService } from './list-of-dishes.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  searchName:string='';
  searchCategory:string[]=[];
  searchCuisine:string[]=[];
  searchType:string[]=[];
  maxPrice:number=this.Dishes.getMaxPrice()*this.currencies.getValue();
  minPrice:number=this.Dishes.getMinPrice()*this.currencies.getValue();
  searchMaxPrice:number = Math.ceil(Number((this.Dishes.getMaxPrice()*this.currencies.getValue())));
  searchMinPrice:number = Math.floor(Number((this.Dishes.getMinPrice()*this.currencies.getValue())));
  searchRating:number[]=[];

  constructor(public Dishes:ListOfDishesService,public currencies:CurrenciesService) { }

  addCuisine(cuisine:any){
    if(!this.searchCuisine.includes(cuisine)){
      this.searchCuisine.push(cuisine);
    }else{
      this.searchCuisine.splice(this.searchCuisine.indexOf(cuisine),1);
    }
    let newSearchCuisine = Object.assign([],this.searchCuisine);
    this.searchCuisine = newSearchCuisine;
  }

  addCategory(category:any){
    if(!this.searchCategory.includes(category)){
      this.searchCategory.push(category);
    }else{
      this.searchCategory.splice(this.searchCategory.indexOf(category),1);
    }
    let newSearchCategory = Object.assign([],this.searchCategory);
    this.searchCategory= newSearchCategory;
  } 
  addRating(rating:any){
    if(!this.searchRating.includes(rating)){
      this.searchRating.push(rating);
    }else{
      this.searchRating.splice(this.searchRating.indexOf(rating),1);
    }
    let newSearchRating = Object.assign([],this.searchRating);
    this.searchRating= newSearchRating;
  } 
  addType(type:string){
    if(!this.searchType.includes(type)){
      this.searchType.push(type);
    }else{
      this.searchType.splice(this.searchType.indexOf(type),1);
    }
    let newSearchType = Object.assign([],this.searchType);
    this.searchType= newSearchType;
  }
  reset(){
    this.searchName = '';
    this.searchCategory = [];
    this.searchCuisine = [];
    this.searchType=[];
    this.searchMaxPrice = Math.ceil(Number((this.Dishes.getMaxPrice()*this.currencies.getValue())));
    this.searchMinPrice = Math.floor(Number((this.Dishes.getMinPrice()*this.currencies.getValue())));
    this.searchRating = [];
  }
}
