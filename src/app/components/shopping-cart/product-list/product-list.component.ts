import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  product?: Product
  wishlist: number[] = [];

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getProducts().subscribe(prod => {
      this.productList = prod;
      this.loadWishlist()
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist()
      .subscribe(res => {
        this.wishlist = res })
  }

  getProductById(id: string) {
    this.productService.getProductById(id)
      .subscribe(prod => {
        this.product = prod;
      })
  }

  getByName(name: string) {
    this.productService.getProductByName(name)
      .subscribe(prod => {
        this.productList = prod
      })
  }

}
