import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-cart-feature-product',
  templateUrl: './cart-feature-product.component.html',
  styleUrls: ['./cart-feature-product.component.scss']
})
export class CartFeatureProductComponent implements OnInit {
  data: Product[] = [];

  constructor(service: QuillingService) {
    // const arr = service.products.filter((item as Product, index as Number) => index < 6);
    this.data = service.shuffleArray(service.products);
  }

  ngOnInit(): void {
  }

}
