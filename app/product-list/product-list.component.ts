import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { QuillingService } from '../quilling.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(public service: QuillingService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const cat: string | null = paramMap.get('cat');
      console.log('Category from route:', cat);

      if (cat) {
        this.service.setFilteredProductsByCategory(cat);
      } else {
        this.service.filteredProducts$.subscribe(filteredProducts => {
          this.products = filteredProducts;
        });
      }
    });

    // Always subscribe to the filtered products
    this.service.filteredProducts$.subscribe(filteredProducts => {
      this.products = filteredProducts;
      console.log('Updated products:', this.products);
    });
  }
}