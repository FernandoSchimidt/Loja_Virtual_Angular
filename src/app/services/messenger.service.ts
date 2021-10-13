import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(product:any) {
    this.subject.next(product)
  }
  getMsg() {
    return this.subject.asObservable()
  }
}
