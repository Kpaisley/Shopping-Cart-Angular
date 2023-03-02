import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from '../../../../../models/cart-product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() CartItem: CartProduct = new CartProduct();
  @Input() deleteItem: (id: any) => void = Function;
  @Input() incrementQuantity: (cartItem: any) => void = Function;
  @Input() decrementQuantity: (cartItem: any) => void = Function;

  constructor() { }

  ngOnInit(): void {
  }

  getPrice() {
    var x;
    x = (this.CartItem.unitPrice * this.CartItem.quantity).toFixed(2);
    return x;
  }

  


  

}
