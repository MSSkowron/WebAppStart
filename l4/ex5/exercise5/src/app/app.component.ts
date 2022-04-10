import { Component } from '@angular/core';
import { Cars } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car List!';
  cars =Cars
  marki : string[]=[];
  chosenCar=false;
  chosenMark='';
  chosenModel='';
  chosenColor='';
  currentMark='';

  clickMark='';
  clickModel='';

  try(): boolean {
    if(this.cars.length === 0){
      return false;
    }else{
      for(const c of this.cars){
        if(!this.marki.includes(c.marka)){
          this.marki.push(c.marka);
        }
      }
      return true;
    }
  }

  addCar(marka:string,model:string,color:string){
    this.chosenCar=true;
    this.chosenMark=marka;
    this.chosenModel=model;
    this.chosenColor=color;
  }

  showChild(marka:string){
    this.clickMark = marka;
  }
  showChildren(model:string){
    this.clickModel=model;
  }

}
