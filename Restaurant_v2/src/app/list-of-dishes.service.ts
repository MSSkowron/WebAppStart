import { Injectable} from '@angular/core';
import { Dish } from './Dish';
import { DatabaseService } from './database.service';

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

  /*
  dishList: Dish[]=[
    {
      },
      },
      },
      {
      
        id:9,
        name: "Naleśniki",
        cuisine:"Kuchnia Polska",
        type:"Główne",
        category:"Placek",
        ingredients:["Ciasto","Ser","Sos sojowy","Truskawki"],
        quantity:10,
        price:2.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=15lvu7EgZzSThWWjowNyPAdNRls30G11O"],
        ratesCounter:0,
        rating:0,
        comments:[]
      },
      {
        id:10,
        name: "Kaczka",
        cuisine:"Kuchnia wietnamska",
        type:"Główne",
        category:"Mięsne",
        ingredients:["Kaczka","Zielenina","Sos"],
        quantity:3,
        price:25,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://btth.pl/wp-content/uploads/2017/08/zupa-z-bambusem-kaczka.jpg"],
        ratesCounter:0,
        rating:0,
        comments:[]
      },
      {
        id:11,
        name: "Pizza",
        cuisine:"Kuchnia włoska",
        type:"Główne",
        category:"Fast-food",
        ingredients:["Ser","Pieczarki","Pomidor","Cebula"],
        quantity:25,
        price:5.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1hSl9C9YqejnXkLPnVFuw5GMT8rU6uPLG"],
        ratesCounter:0,
        rating:0,
        comments:[]
      },
      {
        id:12,
        name: "Sałatka grecka",
        cuisine:"Kuchnia włoska",
        type:"Główne",
        category:"Sałatka",
        ingredients:["Mięso","Ser feta","Sos"],
        quantity:5,
        price:5.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1lZLAbwi3ZnVS3j3mKCwmi80_W3r8vAeg"],
        ratesCounter:0,
        rating:0,
        comments:[]
      }
  ]
  */
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
}
