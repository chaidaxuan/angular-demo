import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.less']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    console.log(this.product);
  }

}
