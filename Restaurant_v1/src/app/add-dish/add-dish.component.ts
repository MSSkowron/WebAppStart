import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { ListOfDishesService } from '../list-of-dishes.service';
import { FormGroup,FormBuilder, FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishForm!: FormGroup;
  constructor(public Dishes:ListOfDishesService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  
  initializeForm():void{
    this.dishForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      cuisine:['',[Validators.required]],
      type:['',[Validators.required]],
      category:['',[Validators.required]],
      quantity:['',[Validators.required,Validators.min(0)]],
      price:['',[Validators.required,Validators.min(0),Validators.required,Validators.max(200)]],
      description:['',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]],
      ingredients: this.fb.array([this.fb.control('',[Validators.required,Validators.minLength(3)])]),
      images: this.fb.array([this.fb.control('',[Validators.required,Validators.pattern('(https?:\/\/.*\.(?:png|jpg))')])]),
    })
  }

  onSubmit():void{
    if(this.dishForm.valid && !this.isInDishList(this.dishForm.get('name')?.value)){
      console.log(123);
      const newDish: Dish = {
        name: this.dishForm.get('name')?.value,
        cuisine: this.dishForm.get('cuisine')?.value,
        type: this.dishForm.get('type')?.value,
        category: this.dishForm.get('category')?.value,
        quantity: this.dishForm.get('quantity')?.value,
        price: this.dishForm.get('price')?.value,
        description: this.dishForm.get('description')?.value,
        ingredients:this.dishForm.get('ingredients')?.value,
        images:this.dishForm.get('images')?.value,
        rating:0,
      };
      console.log(this.Dishes.dishList);
      this.Dishes.addDish(newDish);
      console.log(this.Dishes.dishList);
    }
    this.dishForm.reset();
  }

  isInDishList(name:string){
    for(let dish of this.Dishes.dishList){
      if(dish.name.toUpperCase===name.toUpperCase){
        return true;
      }
    }
    return false;
  }
  onReset(){
    this.dishForm.reset();
  }

  get ingredients(): FormArray{
    return this.dishForm.get('ingredients') as FormArray;
  }
  get images(): FormArray{
    return this.dishForm.get('images') as FormArray;
  }

  addIngredient():void{
    this.ingredients.push(this.fb.control(''));
  }

  removeIngredient(index:number):void{
    this.ingredients.removeAt(index);
  }

  addImage():void{
    this.images.push(this.fb.control(''));
  }

  removeImage(index:number):void{
    this.images.removeAt(index);
  }

}
