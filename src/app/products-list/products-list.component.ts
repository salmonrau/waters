import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  produtDetails: ProductDetails[] = [];

  constructor(private router:Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    if(history.state.type === 'one') {
      this.produtDetails = [{
        productType: 'Stater',
        productDescription: 'Stater Feature for your business grow',
        price: '$1'
      },{
        productType: 'Stater',
        productDescription: 'Stater Feature for your business grow',
        price: '$1'
      }]
    } else {
      this.produtDetails = [];
    }
  }

}
