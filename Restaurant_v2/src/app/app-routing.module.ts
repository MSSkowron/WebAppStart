import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishListComponent } from './dish-list/dish-list.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeSiteComponent } from './home-site/home-site.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeSiteComponent},
  {path:'dishes',component:DishListComponent},
  {path:'detail/:id',component:DishDetailComponent},
  {path:'addDish',component:AddDishComponent},
  {path:'shopList',component:ShopListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
