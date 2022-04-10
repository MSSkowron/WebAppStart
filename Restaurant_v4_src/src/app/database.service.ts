import { Injectable } from '@angular/core';
import { Dish } from './Dish';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 
import { User } from './user';
import { orderH } from './orderhist';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  comments = new Map();

  dishesCollection!:AngularFirestoreCollection<Dish>;
  dishes: Observable<Dish[]>;

  usersCollection!:AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  
  featuresCollection!:AngularFirestoreCollection<any>;
  features: Observable<any[]>;

  constructor(public rst:AngularFirestore) {
    this.dishesCollection=this.rst.collection('Dishes');

    this.dishes=this.dishesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dish;
        data.id = a.payload.doc.id;
        return data;
      })
    }))

    this.usersCollection=this.rst.collection('Users');
    this.users=this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        return data;
      })
    }))

    this.featuresCollection=this.rst.collection('features');
    this.features=this.featuresCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as number;
        return data;
      })
    }))
   }

  setPersistence(option:number){
    this.featuresCollection.doc('persistence').update({value:option});
  }

  getPersistence():Observable<any>{
    return this.rst.collection('features').doc('persistence').valueChanges();
  }

  getCollectionItem(id:any):Observable<any>{
    return this.rst.collection('Dishes').doc(id).valueChanges();
  }

  getUser(id:any):Observable<any>{
    return this.rst.collection('Users').doc(id).valueChanges();
  }

  getDishes(){
    return this.dishes;
  }

  getUsers(){
    return this.users;
  }

  addDish(dish:Dish){
    this.dishesCollection.add(dish);
  }

  addUser(user:User){
    this.usersCollection.doc(user.uid).set({
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      dishesOrdered:user.dishesOrdered,
      orderHist:user.orderHist,
      isBanned:user.isBanned,
      roles:user.roles
    });
  }

  deleteDish(id:any){
    this.dishesCollection.doc(id).delete();
  }

  deleteUser(id:any){
    this.usersCollection.doc(id).delete();
  }

  updateUserOrderedDishes(uid:string,resultOrderedDishes:string[]){
    this.usersCollection.doc(uid).update({dishesOrdered:resultOrderedDishes});
  }

  updateUserRoles(uid:string,newRoles:string[]){
    this.usersCollection.doc(uid).update({roles:newRoles});
  }

  updateBanStatus(uid:string,status:boolean){
    this.usersCollection.doc(uid).update({isBanned:status});
  }

  updateUserOrderHist(uid:string,resultOrderHist:orderH[]){
    this.usersCollection.doc(uid).update({orderHist:resultOrderHist});
  }

  incrementQuantity(id:any,old:number){
   this.dishesCollection.doc(id).update({quantity: old + 1});
  }

  decrementQuantity(id:any,old:number){
    this.dishesCollection.doc(id).update({quantity:old - 1});
  }

  updateRateHistory(id:any,newRh:any){
    this.dishesCollection.doc(id).update({ratingHistory:newRh});
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
