import { Component, OnInit } from '@angular/core';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  categories: string[] = [];
  constructor(service: QuillingService) { this.categories = service.categories; }

  ngOnInit(): void {
  }

}
