import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  apiUrl = environment.apiUrlBase + "wishlist"

  constructor(
    private http: HttpClient
  ) { }

  addToWishlist(productId: any) {
    return this.http.post(this.apiUrl, { id: productId })
  }
  
  removeToWishlist(productId: any) {
    return this.http.delete(`${this.apiUrl}/${productId}`)
  }

  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map((result: any[]) => {
          let productIds: any[] = []

          result.forEach(item => productIds.push(item.id))

          return productIds
        })
      )
  }
}
