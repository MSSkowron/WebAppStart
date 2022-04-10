import { Injectable } from '@angular/core';
import { Dish } from './Dish';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  comments = new Map();
  dishesCollection!:AngularFirestoreCollection<Dish>;
  dishes: Observable<Dish[]>;

  constructor(public rst:AngularFirestore) {
    this.dishesCollection=this.rst.collection('Dishes');

    this.dishes=this.dishesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dish;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
   }

  getCollectionItem(id:any):Observable<any>{
    return this.rst.collection('Dishes').doc(id).valueChanges();
  }

  getDishes(){
    return this.dishes;
  }

  addDish(dish:Dish){
    this.dishesCollection.add(dish);
  }

  deleteDish(id:any){
    this.dishesCollection.doc(id).delete();
  }

  incrementQuantity(id:any,old:number){
   this.dishesCollection.doc(id).update({quantity: old + 1});
  }

  decrementQuantity(id:any,old:number){
    this.dishesCollection.doc(id).update({quantity:old - 1});
  }

  rateDish(id:any,currRating:number,currRatesCounter:number,rate:number){
   let Rating:number = Number(((currRating+rate)/(currRatesCounter+1)));
   if(Rating>4.75){
     Rating=5;
   }
   else if(Rating>4.25){
    Rating=4.5;
   }
   else if(Rating > 4){
     Rating = 4;
   }
   else if(Rating>3.75){
     Rating = 4;
   }
   else if(Rating > 3.25){
      Rating=3.5
   }
   else if(Rating>3){
     Rating=3;
   }
   else if(Rating>2.75){
    Rating = 3;
  }
  else if(Rating > 2.25){
     Rating=2.5
  }
  else if(Rating>2){
    Rating=2;
  }
  else if(Rating>1.75){
    Rating = 2;
  }
  else if(Rating > 1.25){
     Rating=1.5
  }
  else if(Rating>1){
    Rating=1;
  }
  else if(Rating>0.75){
    Rating=1;
  }
  else if(Rating>0.25){
    Rating = 0.5;
  }
  else{
    Rating = 0;
  }
   this.dishesCollection.doc(id).update({rating:Rating});
   this.dishesCollection.doc(id).update({ratesCounter: currRatesCounter + 1});
 }
 addComment(id:any,comment:any){
  if(this.comments.has(id)){
    let arr = this.comments.get(id);
    arr.push(comment);
    this.comments.set(id,arr);
  }
  else{
    let arr = [];
    arr.push(comment);
    this.comments.set(id,arr);
  }
 }
 getComments(id:any){
   return this.comments.get(id);
 }
}
