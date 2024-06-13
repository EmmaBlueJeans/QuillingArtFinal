import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchVal: string = '';
  service: QuillingService;

  constructor(service: QuillingService, private router: Router) {
    this.service = service;
  }

  ngOnInit(): void {}

  search = () => {
    if (this.searchVal.trim()) {
      this.service.setFilteredProducts(this.searchVal);
    } else {
      this.service.resetFilteredProducts();
    }
    this.searchVal = '';

    // Navigate to category after ensuring filtered products are set
    setTimeout(() => {
      this.router.navigate(['category']);
    }, 100);
  }
}