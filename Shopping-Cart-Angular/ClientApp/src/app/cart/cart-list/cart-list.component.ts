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
  @Input() getTotalQuantity: () => any = Function;
  @Input() getTotalPrice: () => any = Function;
  @Input() clearCart: () => void = Function;
  @Input() incrementQuantity: (cartItem: any) => void = Function;
  @Input() decrementQuantity: (cartItem: any) => void = Function;
  constructor() { }

  ngOnInit(): void {
  }

  
  
  

}
