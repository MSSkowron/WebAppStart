import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponent } from './dish-list/dish/dish.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFilterComponent } from './form-filter/form-filter.component';
import { FilterDishesPipe } from './filter-dishes.pipe';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishListComponent,
    DishComponent,
    AddDishComponent,
    ShopListComponent,
    FormFilterComponent,
    FilterDishesPipe,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,Ng5SliderModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
