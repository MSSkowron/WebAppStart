import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {

  constructor() { }

  orders = new Map();
  orderValue = 0;
  orderCounter = 0;
  
  getList(){
      let result=[];
      for(let entry of this.orders.entries()){
        result.push([entry[0],entry[1]]);
      }
      return result;
  }

  add(name:string,price: any):void {
    if(this.orders.has(name)){
      for (let entry of this.orders.entries()) {
        if(entry[0]===name){
          let newValue = entry[1] + 1;
          this.orders.delete(name);
          this.orders.set(name,newValue);
          break;
        }
      }
    }else{
      this.orders.set(name,1);
    }
    this.orderValue += price;
    this.orderCounter += 1;
  }

  remove(name:string,price: any):void {
    if(this.orders.has(name)){
      for (let entry of this.orders.entries()) {
        if(entry[0]===name){
          let newValue = entry[1] - 1;
          this.orders.delete(name);
          if(newValue>0){
            this.orders.set(name,newValue);
          }else{
          }
          break;
        }
      }
      this.orderValue -=price;
      this.orderCounter -= 1;
    }
  }
  shopListDishRemoval(name:string,price:any):void{
    if(this.orders.has(name)){
      this.orderValue -= this.orders.get(name)*price;
      this.orderCounter -= this.orders.get(name);
      this.orders.delete(name);
    }
  }
  dishNotInList(name:string){
    return !this.orders.has(name);
  }
}
