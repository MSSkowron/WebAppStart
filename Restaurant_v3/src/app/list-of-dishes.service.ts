import { Injectable } from '@angular/core';
import { Dish } from './Dish';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ListOfDishesService {
  /*
  dishesCollection!:AngularFirestoreCollection<Dish>;
  dishes: Observable<Dish[]>;
  */


  constructor(public rst:AngularFirestore) {
    /*
    this.dishesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dish;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
    */
   }



  dishList: Dish[]=[
    {
      id:1,
      name: "Ślimaki",
      cuisine:"Kuchnia francuska",
      type:"Mięsne",
      category:"Dania główne",
      ingredients:["Ślimaki","Pietruszka","Tajemniczy sos"],
      quantity:10,
      price:25,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
      images:["https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/ThinkstockPhotos-475268977.jpg?itok=iAB6RW_o"],
      ratesCounter:5,
      rating:5,
      comments:[]
    },
    {
      id:2,
      name: "Burger",
      cuisine:"Kuchnia Polska",
      type:"Mięsne",
      category:"Fast-food",
      ingredients:["Mięso wołowe","Bułka","Pomidor","Cebula","Ser"],
      quantity:15,
      price:6.99,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
      images:["https://drive.google.com/uc?export=view&id=1rv2RfVB0BgZB1WXTAuzqrNYRG3WccKd8","https://drive.google.com/uc?export=view&id=1rv2RfVB0BgZB1WXTAuzqrNYRG3WccKd8","https://drive.google.com/uc?export=view&id=1rv2RfVB0BgZB1WXTAuzqrNYRG3WccKd8"],
      ratesCounter:2,
      rating:4,
      comments:[]
      },
      {
        id:3,
        name: "Frytki",
        cuisine:"Kuchnia Polska",
        type:"Przystawka",
        category:"Fast-food",
        ingredients:["Ziemniaki","Sól","Sos"],
        quantity:25,
        price:4.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1p-OAMMkrwAhsXjqrYp0L_oHa0og12pM-"],
        ratesCounter:3,
        rating:5,
        comments:[]
      },
      {
        id:4,
        name: "Kanapka",
        cuisine:"Kuchnia Polska",
        type:"Przekąska",
        category:"Kanapka",
        ingredients:["Chleb","Ser","Szynka"],
        quantity:10,
        price:3,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1zpTgR3fWcOIoON0AAMmUsMf36hWx5YIe"],
        ratesCounter:5,
        rating:2.5,
        comments:[]
      },
      {
        id:5,
        name: "Smażona kiełbasa",
        cuisine:"Kuchnia Polska",
        type:"Mięsne",
        category:"Dania główne",
        ingredients:["Kiełbasa","Cebula","Keczup"],
        quantity:6,
        price:2.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1xkks2uxF6yArBMoIq1J76NqFx6K11T6d"],
        ratesCounter:1,
        rating:2,
        comments:[]
      },
      {
        id:6,
        name: "Kotlet schabowy",
        cuisine:"Kuchnia Polska",
        type:"Mięsne",
        category:"Dania główne",
        ingredients:["Schab","Ziemniaki","Surówka"],
        quantity:10,
        price:5.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1ZNpmXTL5E99IbsJ26oGXIVXEAara2L_K"],
        ratesCounter:1,
        rating:3.5,
        comments:[]
      },
      {
        id:7,
        name: "Lody",
        cuisine:"Kuchnia polska",
        type:"Przystawka",
        category:"Deser",
        ingredients:["Truskawki","Winogrona","Lody śmietankowe"],
        quantity:50,
        price:3,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1lkXdX6dhZR_Tu7stgg7ryRHH6BRhv_A0"],
        ratesCounter:2,
        rating:4.5,
        comments:[]
      },
      {
        id:8,
        name: "Spaghetti",
        cuisine:"Kuchnia włoska",
        type:"Mięsne",
        category:"Mięsne",
        ingredients:["Mięso wołowe","Ziemniaki","Surówka"],
        quantity:23,
        price:2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1ysI75BxIP3HxK2jcp7JCgU93OAi7hVHd"],
        ratesCounter:3,
        rating:0,
        comments:[]
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
        ratesCounter:4,
        rating:2,
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
        ratesCounter:5,
        rating:3,
        comments:[["Jurek","Spoko","Ogolenie spoko kaczka polecam"],["Marek","Słaba","Ogólnie słaba kaczka nie polecam","2020-04-21"]]
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
        ratesCounter:6,
        rating:5,
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
        ratesCounter:1,
        rating:3,
        comments:[]
      }
  ]

  currentlyOrdered = 0;
  mostExpensiveDishes : number[] = this.mostExpensive();
  leastExpensiveDishes : number[] = this.leastExpensive();
  //Najdroższe dania
  getDish(id:number){
    for(let dish of this.dishList){
      if(dish.id == id){
        return dish;
      }
    }
    return undefined;
  }
  
  getDishes(){
    return this.dishList;
  }

  addComment(id:number,comment:string[]){
    let i = 0;
    for(i;i<this.dishList.length;i++){
      if(this.dishList[i].id === id){
        this.dishList[i].comments.push(comment);
        break;
      }
    }
  }
  
  rateDish(id:number,rtg:number){
    for(let dish of this.dishList){
      if(dish.id===id){
        dish.ratesCounter ++;
        dish.rating = Number(((dish.rating + rtg)/dish.ratesCounter).toFixed(2));
      }
    }
  }

  removeDish(id:number){
    let newDishlist :Dish[] = [];
    for(let dish of this.dishList){
      if(dish.id!==id){
        newDishlist.push(dish);
      }
    }
    this.dishList=newDishlist;
  }
  addDish(d:Dish){
    let newDishlist :Dish[] = [d];
    for(let dish of this.dishList){
      newDishlist.push(dish);
    }
    this.dishList=newDishlist;
  }
  mostExpensive(){
    let max=0;
    let maxArr=[];
    for(let dish of this.dishList){
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
  getNextID(){
    let id:number=0;
    for(let dish of this.dishList){
      if(dish.id > id){
        id = dish.id;
      }
    }
    return id + 1;
  }
  //Najtańsze dania
  leastExpensive(){
    let min=10000;
    let minArr=[];
    for(let dish of this.dishList){
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
    if(this.dishList.length>0){
      min = this.dishList[0].price;
      for(let dish of this.dishList){
        if(dish.price < min){
          min = dish.price
        }
      }
    }
    return min;
  }

  getMaxPrice(){
    let max = 100;
    if(this.dishList.length>0){
      max = this.dishList[0].price;
      for(let dish of this.dishList){
        if(dish.price > max){
          max = dish.price
        }
      }
    }
    return max;
  }
  getTypes():any[]{
    let result = new Set();
    for(let dish of this.dishList){
      result.add(dish.type);
    }
    return Array.from(result).sort();
  }
  getCuisines():any[]{
    let result = new Set();
    for(let dish of this.dishList){
      result.add(dish.cuisine);
    }
    return Array.from(result).sort();
  }

  getCategories():any[]{
    let result = new Set();
    for(let dish of this.dishList){
      result.add(dish.category);
    }
    return Array.from(result).sort();
  }

  getRatings():any[]{
    let result = new Set();
    for(let dish of this.dishList){
      result.add(dish.rating);
    }
    return Array.from(result).sort();
  }
  decrementQuantity(id:number){
    for (let dish of this.dishList){
      if(dish.id === id){
        dish.quantity--;
        break;
      }
    }
  }
  incrementQuantity(id:number){
    for (let dish of this.dishList){
      if(dish.id === id){
        dish.quantity++;
        break
      }
    }
  }
}
