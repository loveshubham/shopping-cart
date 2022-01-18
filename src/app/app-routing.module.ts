import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { WishlistComponent } from './components/shoppingcart/wishlist/wishlist.component';
import { ProductDetailsComponent } from './components/shoppingcart/product-list/product-details/product-details.component';
import { ProductDetailComponent } from './components/shoppingcart/product-list/product-item/product-detail/product-detail.component';
const routes: Routes = [
  {path:'' , redirectTo:'/shop', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop', component:ShoppingcartComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'productdetail' , component:ProductDetailComponent },
  {path:'**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
