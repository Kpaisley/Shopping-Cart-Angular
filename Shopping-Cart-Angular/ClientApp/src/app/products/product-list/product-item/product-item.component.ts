import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../../models/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() Product: Product = new Product();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


  addToCart(item: Product) {
    this.cartService.addCartItem(item);
  }

}
