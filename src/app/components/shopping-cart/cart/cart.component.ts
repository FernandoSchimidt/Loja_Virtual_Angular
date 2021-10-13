import { CartItem } from './../../../models/cart-item';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  cartTotal = 0;
  constructor(
    private msgService: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.hendleSubscription();
    this.loadCartItems();
  }

  hendleSubscription() {
    this.msgService.getMsg().subscribe((product: any) => {
      this.loadCartItems();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((item: any) => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  loadCartItems() {
    this.cartService.getCartItem()
      .subscribe((items: CartItem[]) => {
        this.cartItems = items;
        this.calcCartTotal();
      })
  }
}


