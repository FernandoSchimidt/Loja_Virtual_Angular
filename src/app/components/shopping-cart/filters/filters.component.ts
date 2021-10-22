import { Product } from 'src/app/models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  name: string = ''
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  findByName(event: any) {
    this.productService.getProductByName(event.target.value)
      .subscribe(prods => {
        this.products = prods
        console.log(this.products)
      })

  }

}
