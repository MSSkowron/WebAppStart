import { Injectable } from '@angular/core';
import { Dish } from './Dish';
@Injectable({
  providedIn: 'root'
})
export class ListOfDishesService {
  cuisines=['Kuchnia polska','Kuchnia włoska','Kuchnia angielska','Kuchnia francuska','Kuchnia wietnamska','Kuchnia węgierska']
  types=['Główne','Przekąska','Przystawka']
  categories=['Sałatka','Surówka','Pierogi','Zupa','Kanapka','Fast food','Deser','Mięsne','Rybne','Placek','Wypiek','Kluski']
  dishList: Dish[]=[
    {
      name: "Ślimaki",
      cuisine:"Kuchnia francuska",
      type:"Mięsne",
      category:"Dania główne",
      ingredients:["Ślimaki","Pietruszka","Tajemniczy sos"],
      quantity:10,
      price:25,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
      images:["https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/ThinkstockPhotos-475268977.jpg?itok=iAB6RW_o"],
      rating:5
    },
    {
      name: "Burger",
      cuisine:"Kuchnia Polska",
      type:"Mięsne",
      category:"Fast-food",
      ingredients:["Mięso wołowe","Bułka","Pomidor","Cebula","Ser"],
      quantity:15,
      price:6.99,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
      images:["https://drive.google.com/uc?export=view&id=1rv2RfVB0BgZB1WXTAuzqrNYRG3WccKd8"],
      rating:4
      },
      {
        name: "Frytki",
        cuisine:"Kuchnia Polska",
        type:"Przystawka",
        category:"Fast-food",
        ingredients:["Ziemniaki","Sól","Sos"],
        quantity:25,
        price:4.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1p-OAMMkrwAhsXjqrYp0L_oHa0og12pM-"],
        rating:5
      },
      {
        name: "Kanapka",
        cuisine:"Kuchnia Polska",
        type:"Przekąska",
        category:"Kanapka",
        ingredients:["Chleb","Ser","Szynka"],
        quantity:10,
        price:3,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1zpTgR3fWcOIoON0AAMmUsMf36hWx5YIe"],
        rating:2.5
      },
      {
        name: "Smażona kiełbasa",
        cuisine:"Kuchnia Polska",
        type:"Mięsne",
        category:"Dania główne",
        ingredients:["Kiełbasa","Cebula","Keczup"],
        quantity:6,
        price:2.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1xkks2uxF6yArBMoIq1J76NqFx6K11T6d"],
        rating:2
      },
      {
        name: "Kotlet schabowy",
        cuisine:"Kuchnia Polska",
        type:"Mięsne",
        category:"Dania główne",
        ingredients:["Schab","Ziemniaki","Surówka"],
        quantity:10,
        price:5.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1ZNpmXTL5E99IbsJ26oGXIVXEAara2L_K"],
        rating:3.5
      },
      {
        name: "Lody",
        cuisine:"Kuchnia polska",
        type:"Przystawka",
        category:"Deser",
        ingredients:["Truskawki","Winogrona","Lody śmietankowe"],
        quantity:50,
        price:3,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1lkXdX6dhZR_Tu7stgg7ryRHH6BRhv_A0"],
        rating:4.5
      },
      {
        name: "Spaghetti",
        cuisine:"Kuchnia włoska",
        type:"Mięsne",
        category:"Mięsne",
        ingredients:["Mięso wołowe","Ziemniaki","Surówka"],
        quantity:23,
        price:2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1ysI75BxIP3HxK2jcp7JCgU93OAi7hVHd"],
        rating:0
      },
      {
        name: "Naleśniki",
        cuisine:"Kuchnia Polska",
        type:"Główne",
        category:"Placek",
        ingredients:["Ciasto","Ser","Sos sojowy","Truskawki"],
        quantity:10,
        price:2.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=15lvu7EgZzSThWWjowNyPAdNRls30G11O"],
        rating:2
      },
      {
        name: "Kaczka",
        cuisine:"Kuchnia wietnamska",
        type:"Główne",
        category:"Mięsne",
        ingredients:["Kaczka","Zielenina","Sos"],
        quantity:3,
        price:25,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://btth.pl/wp-content/uploads/2017/08/zupa-z-bambusem-kaczka.jpg"],
        rating:3
      },
      {
        name: "Pizza",
        cuisine:"Kuchnia włoska",
        type:"Główne",
        category:"Fast-food",
        ingredients:["Ser","Pieczarki","Pomidor","Cebula"],
        quantity:25,
        price:5.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1hSl9C9YqejnXkLPnVFuw5GMT8rU6uPLG"],
        rating:5
      },
      {
        name: "Sałatka grecka",
        cuisine:"Kuchnia włoska",
        type:"Główne",
        category:"Sałatka",
        ingredients:["Mięso","Ser feta","Sos"],
        quantity:5,
        price:5.5,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat, blanditiis nisi sint iste quos quis aliquid illum dolores similique?",
        images:["https://drive.google.com/uc?export=view&id=1lZLAbwi3ZnVS3j3mKCwmi80_W3r8vAeg"],
        rating:3
      }
  ]
  constructor() { }

  currentlyOrdered = 0;
  mostExpensiveDishes : string[] = this.mostExpensive();
  leastExpensiveDishes : string[] = this.leastExpensive();
  //Najdroższe dania
  removeDish(name:string){
    let newDishList : Dish[] = [];
    for(let dish of this.dishList){
      if(dish.name!==name){
          newDishList.push(dish);
      }
    }
    this.dishList=newDishList;
    console.log(this.dishList);
  }

  addDish(newDish:Dish){
    let newDishList : Dish[] = [];
    for(let dish of this.dishList){
        newDishList.push(dish);
    }
    newDishList.push(newDish);
    this.dishList=newDishList;
    console.log(this.dishList);
    this.dishList=[];
  }
  
  mostExpensive(){
    let max=0;
    let maxArr=[];
    for(let dish of this.dishList){
      if(dish.price >max){
        max = dish.price;
        maxArr=[];
        maxArr.push(dish.name);
      }else if (dish.price === max){
        maxArr.push(dish.name);
      }
    }
    return maxArr;
  }
  
  //Najtańsze dania
  leastExpensive(){
    let min=10000;
    let minArr=[];
    for(let dish of this.dishList){
      if(dish.price < min){
        min = dish.price;
        minArr=[];
        minArr.push(dish.name);
      }else if (dish.price === min){
        minArr.push(dish.name);
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
}
