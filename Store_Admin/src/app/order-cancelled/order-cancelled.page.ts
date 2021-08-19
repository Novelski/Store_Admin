import { Component, OnInit } from '@angular/core';
import data from '../../assets/CancelledOrder.json';
@Component({
  selector: 'app-order-cancelled',
  templateUrl: './order-cancelled.page.html',
  styleUrls: ['./order-cancelled.page.scss'],
})
export class OrderCancelledPage implements OnInit {
  public order = data;
  tableStyle = 'bootstrap';
  constructor() { }

  ngOnInit() {
  }
  switchStyle(){
    if(this.tableStyle === 'dark'){
      this.tableStyle= 'bootstrap';
    }else {
      this.tableStyle = 'dark';
    }
  }
}
