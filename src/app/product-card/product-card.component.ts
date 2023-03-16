import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() productDetails: ProductDetails[] = [];

  ngOnInit() {
    console.log('productDetails in card', this.productDetails)
  }

}
