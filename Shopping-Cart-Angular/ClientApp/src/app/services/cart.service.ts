import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CartProduct } from '../../../models/cart-product';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemToAdd: CartProduct = new CartProduct();

  @Inject('BASE_URL') baseUrl: string;
  http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
  }

  getCartItems() {
    return this.http.get<CartProduct[]>(this.baseUrl + 'carts');
  }

  addCartItem(item: Product) {
    this.itemToAdd.productId = item.productId;
    this.itemToAdd.productName = item.productName;
    this.itemToAdd.unitPrice = item.unitPrice;
    this.itemToAdd.imageUrl = item.imageUrl;
    this.itemToAdd.quantity = 1;
    this.http.post<CartProduct>(this.baseUrl + 'carts', this.itemToAdd).subscribe(result => result);
  }

  deleteCartItem(id: number) {
    return this.http.delete<CartProduct[]>(this.baseUrl + 'carts/' + id);
  }

  incrementCartItemQuantity(id: number) {
    return this.http.put<CartProduct[]>(this.baseUrl + 'carts/' + id, 1);
  }

  decrementCartItemQuantity(id: number) {
    return this.http.put<CartProduct[]>(this.baseUrl + 'carts/' + id, 0);
  }

  clearCartItems() {
    this.http.delete(this.baseUrl + "carts").subscribe(result => result);
  }



}
