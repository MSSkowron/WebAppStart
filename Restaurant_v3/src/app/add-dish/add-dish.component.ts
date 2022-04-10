import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { ListOfDishesService } from '../list-of-dishes.service';
import { FormGroup,FormBuilder, FormArray,Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishForm!: FormGroup;
  constructor(public Dishes:ListOfDishesService,private fb:FormBuilder,public router:Router,private location: Location) { }
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
      description:['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
      ingredients: this.fb.array([this.fb.control('',[Validators.required,Validators.minLength(3)])]),
      images: this.fb.array([this.fb.control('',[Validators.required,Validators.pattern('(https?:\/\/.*\.(?:png|jpg))')])]),
    })
  }

  onSubmit():void{
    if(this.dishForm.valid){
      const newDish: Dish = {
        //BEZ PRZYPISANIA ID!!!!!!!!!
        id: this.Dishes.getNextID(),
        name: this.dishForm.get('name')?.value,
        cuisine: this.dishForm.get('cuisine')?.value,
        type: this.dishForm.get('type')?.value,
        category: this.dishForm.get('category')?.value,
        quantity: this.dishForm.get('quantity')?.value,
        price: this.dishForm.get('price')?.value,
        description: this.dishForm.get('description')?.value,
        ingredients:this.dishForm.get('ingredients')?.value,
        images:this.dishForm.get('images')?.value,
        ratesCounter:0,
        rating:0,
        comments:[]
      };
      this.Dishes.addDish(newDish);
      this.dishForm.reset();
    }
    this.dishForm.reset();
    this.router.navigate(['/shopList'])
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

  goBack(){
    this.location.back();
  }
}
