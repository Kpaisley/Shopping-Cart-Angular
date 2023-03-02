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
    this.getCartItems();
  }
  //POPULATE CartItems FROM CartsController
  getCartItems = (): void => {
    this.cartService.getCartItems().subscribe(result => {
      this.CartItems = result;
    }, error => console.error(error));
  }

  //DELETE ITEM FROM CART
  deleteItem = (id: any): void => {
    this.cartService.deleteCartItem(id);
    this.getCartItems();
  }

  //UPDATE QUANTITY OF ITEM IN CART
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
      this.getCartItems();
      
    }
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
