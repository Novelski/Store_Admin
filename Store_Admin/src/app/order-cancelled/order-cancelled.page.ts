import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderCancelledService } from './order-cancelled.service';
@Component({
  selector: 'app-order-cancelled',
  templateUrl: './order-cancelled.page.html',
  styleUrls: ['./order-cancelled.page.scss'],
})
export class OrderCancelledPage implements OnInit {
 ordercncl :any = [];
  tableStyle = 'bootstrap';
  constructor(private ordercnclService:OrderCancelledService, private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.ordercnclService.getItemList().subscribe((res) => {
      console.log(res)
      this.ordercncl = res;
    })
  }
  switchStyle(){
    if(this.tableStyle === 'dark'){
      this.tableStyle= 'bootstrap';
    }else {
      this.tableStyle = 'dark';
    }
  }
}
