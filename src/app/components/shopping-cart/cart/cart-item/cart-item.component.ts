import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor(
    private cartService: CartService,
    private messegeService: MessengerService
  ) { }

  ngOnInit(): void {
  }

  removeCartItem(id: any) {
    this.cartService.removeProductCart(id)
      .subscribe(res => {
        this.messegeService.sendMsg(res)
      })
  }

}
