import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishListComponent } from './dish-list/dish-list.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeSiteComponent } from './home-site/home-site.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import {AuthGuard} from "./guard/auth.guard";
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'home',component:HomeSiteComponent},
  {path:'dishes',component:DishListComponent},
  {path:'detail/:id',component:DishDetailComponent,data:{roles:['Client','Admin','Manager']},canActivate:[AuthGuard]},
  {path:'addDish',component:AddDishComponent,data:{roles:['Admin','Manager']},canActivate:[AuthGuard]},
  {path:'shopList',component:ShopListComponent,data: {roles: ['Client','Admin','Manager']},canActivate: [AuthGuard]},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'adminView',component:AdminViewComponent,data:{roles:['Admin']},canActivate:[AuthGuard]},
  {path:'orderHistory',component:OrderHistoryComponent,data:{roles:['Admin','Manager','Client']}},
  {path:'userProfile',component:UserProfileComponent,data:{roles:['Admin','Manager','Client']}},
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
