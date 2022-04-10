import { Component } from '@angular/core';
import { Author } from './models/authormodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApp';
  showForm = true;
  authors: Array<Author> = [];
  author: Author ={name:'',lastname:'',favSentence:''}

  array1:Array<String>=["Ala","ma","kota"];
  array2:Array<number>=[0,1,2,3];

  tabliczka(arr1:string[],arr2:number[]){
    for(let i in arr1){
      console.log('');
      for(let j in arr2){
          console.log(arr1[i]+arr2[j]);
      }
    }

    for(let i of arr1){
      console.log('');
      for(let j of arr2){
        console.log(i+j);
      }
    }
  }

  onSwitchForm() :void{
    this.showForm = !this.showForm;
  }
  addAuthor():void{
    this.authors.unshift(this.author);
    this.author = {name:'',lastname:'',favSentence:''}
  }
}
