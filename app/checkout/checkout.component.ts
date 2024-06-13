import { Component, OnInit } from '@angular/core';
import { QuillingService } from '../quilling.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  service: QuillingService;

  constructor(service:QuillingService){
    this.service = service;

  }
ngOnInit(): void {
  
}



}



