import { Injectable} from '@angular/core';
import { Dish } from './Dish';
import { DatabaseService } from './database.service';
import { ratingT } from './ratingT';

@Injectable({
  providedIn: 'root'
})
export class ListOfDishesService{
  dishes:Dish[]=[];
  cuisines:String[]=["Kuchnia francuska","Kuchnia polska","Kuchnia włoska","Kuchnia wietnamska","Kuchnia amerykańska","Kuchnia grecka","Kuchnia meksykańska","Kuchnia hiszpańska","Kuchnia orientalna"];

  categories:String[]=["Fast-food","Lody","Kanapka","Placek","Sałatka","Zupa","Wypiek","Kluski","Mięsne","Vege","Inne"];
  
  types:String[]=["Danie główne","Przekąska","Przystawka","Napój","Dodatek","Deser","Inne"];

  ratings:Number[]=[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];

  constructor(private databaseService:DatabaseService) {
    this.databaseService.getDishes().subscribe(dishes => {
      this.dishes=dishes;
    })
  }

  getDish(id:any){
    for(let dish of this.dishes){
      if(dish.id == id){
        return dish;
      }
    }
    return this.dishes[0];
  }
   
  currentlyOrdered = 0;
  mostExpensiveDishes : number[] = this.mostExpensive();
  leastExpensiveDishes : number[] = this.leastExpensive();
  //Najdroższe dania
  
  getDishes(){
    return this.dishes;
  }

  getComments(){
    //?????
  }

  addComment(id:any,comment:any){
    for(let dish of this.dishes){
      if(dish.id===id){
        console.log(dish.comments);
        dish.comments.push(comment);
        console.log(dish.comments);
      }
    }
  }
  
  rateDish(id:any,rating:number,ratesCounter:number,rate:number){
    this.databaseService.rateDish(id,rating,ratesCounter,rate);
  }

  removeDish(id:any){
    this.databaseService.deleteDish(id);
  }

  addDish(dish:Dish){
    this.databaseService.addDish(dish);
  }

  mostExpensive(){
    let max=0;
    let maxArr=[];
    for(let dish of this.dishes){
      if(dish.price >max){
        max = dish.price;
        maxArr=[];
        maxArr.push(dish.id);
      }else if (dish.price === max){
        maxArr.push(dish.id);
      }
    }
    return maxArr;
  }

  //Najtańsze dania
  leastExpensive(){
    let min=10000;
    let minArr=[];
    for(let dish of this.dishes){
      if(dish.price < min){
        min = dish.price;
        minArr=[];
        minArr.push(dish.id);
      }else if (dish.price === min){
        minArr.push(dish.id);
      }
    }
    return minArr;
  }

  getMinPrice(){
    let min = 0;
    if(this.dishes.length>0){
      min = this.dishes[0].price;
      for(let dish of this.dishes){
        if(dish.price < min){
          min = dish.price
        }
      }
    }
    return min;
  }

  getMaxPrice(){
    let max = 100;
    if(this.dishes.length>0){
      max = this.dishes[0].price;
      for(let dish of this.dishes){
        if(dish.price > max){
          max = dish.price
        }
      }
    }
    return max;
  }

  getTypes():any[]{
    return this.types;
  }

  getCuisines():any[]{
    return this.cuisines;
  }

  getCategories():any[]{
    return this.categories;
  }

  getRatings():any[]{
    return this.ratings;
  }

  decrementQuantity(id:any,quantity:number){
    this.databaseService.decrementQuantity(id,quantity);
  }

  incrementQuantity(id:any,quantity:number){
    this.databaseService.incrementQuantity(id,quantity);
  }

  rateHistoryUpdate(dishId:string,uid:string,value:number){
    for(let d of this.dishes){
      if (d.id===dishId){
        let res = d.ratingHistory;
        const r:ratingT={
          uid:uid,
          value:value
        }
        res.push(r);
        this.databaseService.updateRateHistory(dishId,res);
      }
    }
  }

  canUserRate(userID:string,dishID:string):boolean{
    for(let d of this.dishes){
      if (d.id===dishID){
        for(let r of d.ratingHistory){
          if(r.uid===userID){
            return false;
          }
        }
      }
    }
    return true;
  }

}
