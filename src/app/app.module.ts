import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { ProductService } from './services/product.service';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
