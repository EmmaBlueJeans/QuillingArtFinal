import { Component, OnInit } from '@angular/core';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sortedCategories: Array<string>;
  constructor(service: QuillingService) {
    this.sortedCategories = service.shuffleArray(service.categories.filter((cat, i) => i < 6)).sort();
  }

  ngOnInit(): void {
  }


}
