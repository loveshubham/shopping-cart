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
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { AuthGuard } from './components/auth.guard';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
const routes: Routes = [
  {path:'' , redirectTo:'/shop', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop', component:ShoppingcartComponent
  // , canActivate:[AuthGuard], data:{roles:['false']}
},
  {path:'cart',component:CartComponent},
  {path:'admin', component:AdminComponent
  // ,  canActivate:[AuthGuard] , data:{roles:['true']}
},
  {path:'user',component:UserComponent},
  {path:'wishlist',component:WishlistComponent
  // , canActivate:[AuthGuard], data:{roles:['false']}
},
// {path:'productdetails/:category/:title' , component:ProductDetailsComponent },
  {path:'productdetails/:id' , component:ProductDetailsComponent },
  {path:'add' , component:ProductAddComponent },
  {path:'delete/:id' , component:ProductDeleteComponent },
  {path:'update/:id' , component:ProductUpdateComponent },
  // {path:'category/:category/:title' , component:ProductByCategoryComponent },
  {path:'category/:category' , component:ProductByCategoryComponent },
  // {path:'category/:id' , component:ProductByCategoryComponent },
  {path:'searchbydate' , component:ProductByDateComponent },
  {path:'updateuser/:id' , component:UpdateUserComponent },
  {path:'deleteuser/:id' , component:DeleteUserComponent },
  {path:'viewuser',component:ViewUserComponent},
  {path:'detailuser' , component:DetailUserComponent },
  {path:'forbidden',component:ForbiddenComponent},
  {path:'**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
