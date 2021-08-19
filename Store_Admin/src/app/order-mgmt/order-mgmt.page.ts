import { Component, OnInit } from '@angular/core'
import data from '../../assets/order.json'
@Component({
  selector: 'app-order-mgmt',
  templateUrl: './order-mgmt.page.html',
  styleUrls: ['./order-mgmt.page.scss']
})
export class OrderMgmtPage implements OnInit {
  public order = data
  tableStyle = 'bootstrap'
  constructor () {}

  ngOnInit () {}

  switchStyle () {
    if (this.tableStyle === 'dark') {
      this.tableStyle = 'bootstrap'
    } else {
      this.tableStyle = 'dark'
    }
  }
}
