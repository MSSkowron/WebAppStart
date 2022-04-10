import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from './Dish';

@Pipe({
  name: 'filterDishesPipe'
})
export class FilterDishesPipe implements PipeTransform {

  transform(dishes:Dish[],nameSearch:string,categorySearch:string[],cuisineSearch:string[],ratingSearch:number[],typeSearch:string[],maxPriceSearch:number,minPriceSearch:number,currency:number): Dish[] {

    let result = dishes;
    if(dishes && nameSearch!==''){
      nameSearch = nameSearch.toLowerCase();
      result = result.filter(dish => {
        return dish.name.toLowerCase().includes(nameSearch);
      })
    }

    if(result && categorySearch.length > 0){
      let c = [];
      for(let category of categorySearch){
        category = category.toLowerCase();
        c.push(...result.filter(dish => {
          return dish.category.toLowerCase().includes(category);
        }))
      }
      result = c;
    }

    if(result && cuisineSearch.length > 0){
      let c = [];
      for(let cuisine of cuisineSearch){
        cuisine = cuisine.toLowerCase();
        c.push(...result.filter(dish => {
          return dish.cuisine.toLowerCase().includes(cuisine);
        }))
      }
      result=c;
    }

    if(result && typeSearch.length > 0){
      let c = [];
      for(let type of typeSearch){
        type = type.toLowerCase();
        c.push(...result.filter(dish => {
          return dish.type.toLowerCase().includes(type);
        }))
      }
      result=c;
    }

    if(result && ratingSearch.length>0){
      let c = [];
      for(let rating of ratingSearch){
        c.push(...result.filter(dish=>{
          return dish.rating === rating;
        }))
      }
      result = c;
    }

  
    if(result && minPriceSearch >= 0 && maxPriceSearch >=0){
      result = result.filter(dish => {
        return (Number((dish.price*currency).toFixed(2)) <= maxPriceSearch && Number((dish.price*currency).toFixed(2)) >= minPriceSearch )
      })
    }
    return result;
  }
}
