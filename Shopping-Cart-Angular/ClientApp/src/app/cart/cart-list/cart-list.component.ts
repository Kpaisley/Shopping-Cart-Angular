import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from '../../../../models/cart-product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() CartItems: CartProduct[] = [];
  @Input() deleteItem: (id: any) => void = Function;
  @Input() updateQuantity: (cartProduct: any, qty: any) => void = Function;
  @Input() getTotalQuantity: () => any = Function;
  @Input() getTotalPrice: () => any = Function;
  @Input() clearCart: () => void = Function;
  constructor() { }

  ngOnInit(): void {
  }

  
  
  

}
