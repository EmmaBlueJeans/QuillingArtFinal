import { Component, OnInit } from '@angular/core';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {

  service: QuillingService;
  constructor(service: QuillingService) { this.service = service; }

  ngOnInit(): void {
  }

}
