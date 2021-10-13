import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl = environment.apiUrlBase + "products"
  products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
  getProductByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/?name_like=${name}`)
  }

}
