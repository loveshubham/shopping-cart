import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FiltersComponent } from './components/shoppingcart/filters/filters.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { ProductListComponent } from './components/shoppingcart/product-list/product-list.component';
import { CartItemComponent } from './components/shoppingcart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shoppingcart/product-list/product-item/product-item.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './components/shoppingcart/wishlist/wishlist.component';
import { WishitemComponent } from './components/shoppingcart/wishlist/wishitem/wishitem.component';
import { FormGroup  , FormControl} from '@angular/forms';
import { ProductDetailsComponent } from './components/shoppingcart/product-list/product-details/product-details.component';
import { ProductDetailComponent } from './components/shoppingcart/product-list/product-item/product-detail/product-detail.component';
import { ProductFiltersPipe } from './product-filters.pipe';
import { ProductAddComponent } from './components/shoppingcart/product-list/product-add/product-add.component';
import { ProductUpdateComponent } from './components/shoppingcart/product-list/product-update/product-update.component';
import { ProductByCategoryComponent } from './components/shoppingcart/product-list/product-by-category/product-by-category.component';
import { ProductDeleteComponent } from './components/shoppingcart/product-list/product-delete/product-delete.component';
import { ProductByDateComponent } from './components/shoppingcart/product-list/product-by-date/product-by-date.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ShoppingcartComponent,
    FiltersComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    WishlistComponent,
    WishitemComponent,
    ProductDetailsComponent,
    ProductDetailComponent,
    ProductFiltersPipe,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductByCategoryComponent,
    ProductDeleteComponent,
    ProductByDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
