import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  filtered!: Product;
  service: QuillingService;

  constructor(service: QuillingService, private route: ActivatedRoute, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id: string = paramMap.get('id')!;
      this.filtered = this.service.products.filter((product: Product) => product._id === id)[0];
    });
  }

  addProduct = () => {
    this.service.addProduct(this.filtered);
  }

  removeProduct = () => {
    this.service.removeProduct(this.filtered);
  }

  update = () => {
    this.service.addProduct(this.filtered);
    this.navigateToCheckout();
    this.router.navigate(['/checkout']); // Navigate to checkout page
  }
getProductCount(): number {
  return this.service.getNewCount(this.filtered);
}
  navigateToCheckout = () => {
    this.router.navigate(['/checkout']);
  }
}
