import { Component, OnInit } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { CartProduct } from '../../../models/cart-product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  CartItems: CartProduct[] = [];
  totalItems: number = 0;
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.totalItems = this.getTotalQuantity();
  }
  //POPULATE CartItems FROM CartsController
  getCartItems = (): void => {
    this.cartService.getCartItems().subscribe(result => {
      this.CartItems = result;
    }, error => console.error(error));
  }

  //INCREASE CART ITEM QUANTITY BY 1
  incrementQuantity = (cartProduct: any): void => {
    this.cartService.incrementCartItemQuantity(cartProduct.productId).subscribe(result => {
      this.CartItems = result;
      }, error => console.error(error));
    
  }

  //DECREASE CART ITEM QUANTITY BY 1
  decrementQuantity = (cartProduct: any): void => {
    this.cartService.decrementCartItemQuantity(cartProduct.productId).subscribe(result => {
      this.CartItems = result;
    }, error => console.error(error));
  }

  //DELETE ITEM FROM CART
  deleteItem = (id: any): void => {
    this.cartService.deleteCartItem(id).subscribe( result => {
      this.CartItems = result
    }, error => console.error(error));
  }

  //RETURN TOTAL ITEM QUANTITY
  getTotalQuantity = (): any => {
    let x = 0;
    for (let i = 0; i < this.CartItems.length; i++) {
      x += this.CartItems[i].quantity;
    }
    return x;
  }

  //RETURN TOTAL COST OF ALL ITEMS INCLUDING 5% TAX.
  getTotalPrice = (): any => {
    let x = 0;
    for (let i = 0; i < this.CartItems.length; i++) {
      x += (this.CartItems[i].unitPrice * this.CartItems[i].quantity)
    }
    x += (x * 0.05);
    return x.toFixed(2);
  }

  //CLEAR CART AND OPEN MODAL WHEN ORDER IS PLACED
  clearCart = (): void => {
    var x = document.getElementById('cart-warning') as HTMLParagraphElement;

    if (this.getTotalQuantity() <= 0) {
      x.innerHTML = "Please add some items to your cart first."
      return;
    }
    else {
      x.innerHTML = "";
      this.cartService.clearCartItems();
      document.getElementById('cart-modal')?.classList.add('display-flex');
    }
  }

   

  

}
