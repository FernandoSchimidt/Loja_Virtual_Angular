import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product = new Product()
  @Input() addToWishlist: boolean;

  // addToWishlist: boolean = false
  wishlist: any[] = []

  constructor(
    private messegeService: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {

    // this.wishlistService.getWishlist()
    // .subscribe(res=>{
    // })


  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.messegeService.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id)
      .subscribe(() => {
        this.addToWishlist = true
      })
  }

  handleRemoveWishlist() {
    this.wishlistService.removeToWishlist(this.productItem.id)
      .subscribe(() => {
        this.addToWishlist = false
      })

  }

}
