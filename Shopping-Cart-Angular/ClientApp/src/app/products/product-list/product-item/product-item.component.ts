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
  @Input() ItemName: string = "";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


  addToCart(item: Product) {
    this.cartService.addCartItem(item);
    this.openModal();

    var x = document.getElementById('item-name') as HTMLHeadingElement;
    x.innerHTML = (item.productName + " Added to Cart!");
    
  }

  openModal() {
    document.getElementById('add-item-modal')?.classList.add('display-flex'); 
  }


  closeModal() {
    document.getElementById('add-item-modal')?.classList.remove('display-flex'); 
  }

}
