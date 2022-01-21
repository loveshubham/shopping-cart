import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { WishlistComponent } from './components/shoppingcart/wishlist/wishlist.component';
import { ProductDetailsComponent } from './components/shoppingcart/product-list/product-details/product-details.component';
import { ProductAddComponent } from './components/shoppingcart/product-list/product-add/product-add.component';
import { ProductDeleteComponent } from './components/shoppingcart/product-list/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/shoppingcart/product-list/product-update/product-update.component';
import { ProductByCategoryComponent } from './components/shoppingcart/product-list/product-by-category/product-by-category.component';
import { ProductByDateComponent } from './components/shoppingcart/product-list/product-by-date/product-by-date.component';
const routes: Routes = [
  {path:'' , redirectTo:'/shop', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop', component:ShoppingcartComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'productdetails/:id' , component:ProductDetailsComponent },
  {path:'add' , component:ProductAddComponent },
  {path:'delete' , component:ProductDeleteComponent },
  {path:'update/:id' , component:ProductUpdateComponent },
  {path:'searchbycategory' , component:ProductByCategoryComponent },
  {path:'searchbydate' , component:ProductByDateComponent },
  {path:'**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
