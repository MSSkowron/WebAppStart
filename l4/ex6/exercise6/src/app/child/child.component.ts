import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input() isDisabledButton=false;
  @Output() buttonClick = new EventEmitter<void>();
  @Output() resetMe = new EventEmitter<void>();

  clButtonClicked(){
    this.buttonClick.emit();
  }
  resButtonClicked(){
    if(this.isDisabledButton===true){
      this.resetMe.emit();
    }
  }
}

