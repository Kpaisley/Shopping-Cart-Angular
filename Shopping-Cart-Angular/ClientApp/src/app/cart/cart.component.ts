import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../../models/cart-product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  CartItems: CartProduct[] = [];

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(result => {
      this.CartItems = result;
    }, error => console.error(error));
  }


  deleteItem = (id: any): void => {
    this.cartService.deleteCartItem(id);
    this.cartService.getCartItems().subscribe(result => {
      this.CartItems = result;
    }, error => console.error(error));
  }

  updateQuantity = (cartProduct: any, qty: any): void => {
    let id = 0;
    let quantity = 0;

    id = Number(cartProduct.productId);

    quantity = Number(qty.target.quantity.value);
    if (quantity <= 0) {
      return;
    }
    else {
      this.cartService.updateCartItemQuantity(id, quantity);
      this.cartService.getCartItems().subscribe(result => {
        this.CartItems = result;
      }, error => console.error(error));
      
    }


    
  }

}
