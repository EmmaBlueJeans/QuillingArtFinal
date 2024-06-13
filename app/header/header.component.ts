import { Component, OnInit } from '@angular/core';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  service: QuillingService;
  constructor(service: QuillingService) { this.service = service; }

  ngOnInit(): void {
  }

}
