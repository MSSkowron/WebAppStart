import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  counter=0;
  isDisabledButtonClick=false;
  buttonClicked(){
    this.counter+=1;
    if(this.counter===10){
      this.isDisabledButtonClick=true;
    }
  }
  reset(){
    this.counter=0;
    this.isDisabledButtonClick=false;
  }
}
