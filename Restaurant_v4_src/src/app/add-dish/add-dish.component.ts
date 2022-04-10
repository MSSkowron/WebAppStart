import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { ListOfDishesService } from '../list-of-dishes.service';
import { FormGroup,FormBuilder, FormArray,Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ShopListService } from '../shop-list.service';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  selectedDish?: Dish;

  dishForm!: FormGroup;
  constructor(public Dishes:ListOfDishesService,private fb:FormBuilder,public router:Router,private location: Location,private shopList:ShopListService,public currencyService:CurrenciesService) { }
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
        comments:[],
        ratingHistory:[]
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

  get name() { return this.dishForm.get('name'); }
  get cuisine() { return this.dishForm.get('cuisine'); }
  get type() { return this.dishForm.get('type'); }
  get category() { return this.dishForm.get('category'); }
  get quantity() { return this.dishForm.get('quantity'); }
  get price() { return this.dishForm.get('price'); }
  get description() { return this.dishForm.get('description'); }

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

  removeDish(dish:Dish){
    this.shopList.shopListDishRemoval(dish.name,dish.price);
    this.Dishes.removeDish(dish.id);
  }

  setDish(dish: Dish){
    if (this.selectedDish === dish){
      this.selectedDish = undefined;
    } else {
      this.selectedDish = dish;
    }
  }

}
