import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishComponent } from './dish-list/dish/dish.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFilterComponent } from './form-filter/form-filter.component';
import { FilterDishesPipe } from './filter-dishes.pipe';
import { Ng5SliderModule } from 'ng5-slider';
import { AppRoutingModule } from './app-routing.module';
import { HomeSiteComponent } from './home-site/home-site.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishComponent,
    AddDishComponent,
    ShopListComponent,
    FormFilterComponent,
    FilterDishesPipe,
    HomeSiteComponent,
    DishDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,Ng5SliderModule,FormsModule, AppRoutingModule,NgxPaginationModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
