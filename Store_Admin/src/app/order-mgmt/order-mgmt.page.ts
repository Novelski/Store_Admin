import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { OrderMgmtService } from './order-mgmt.service';
@Component({
  selector: 'app-order-mgmt',
  templateUrl: './order-mgmt.page.html',
  styleUrls: ['./order-mgmt.page.scss']
})
export class OrderMgmtPage implements OnInit {
order:any = [];
  tableStyle = 'bootstrap'
  constructor (private orderService:OrderMgmtService, private router: Router) {}

  ngOnInit () {}
  ionViewDidEnter() {
    this.orderService.getItemList().subscribe((res) => {
      console.log(res)
      this.order = res;
    })
  }

  switchStyle () {
    if (this.tableStyle === 'dark') {
      this.tableStyle = 'bootstrap'
    } else {
      this.tableStyle = 'dark'
    }
  }
}
