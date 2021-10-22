import { Product } from 'src/app/models/product';
import { CartItem } from './../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = environment.apiUrlBase + 'cart'

  constructor(
    private http: HttpClient
  ) { }

  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl)
      .pipe(
        map((result: any[]) => {
          let cartItems: CartItem[] = [];

          for (let item of result) {
            let productExists = false;

            for (let i in cartItems) {
              if (cartItems[i].productId === item.product.id) {
                cartItems[i].qty++
                productExists = true
                break;
              }
            }
            if (!productExists) {
              cartItems.push(new CartItem(item.id, item.product))
            }
          }

          return cartItems;
        })
      );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(this.apiUrl, { product })
  }
  removeProductCart(id: Product) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
