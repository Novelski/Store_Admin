import { Component, OnInit } from '@angular/core';
import data from '../../assets/track_sales.json';
@Component({
  selector: 'app-track-daily-sales',
  templateUrl: './track-daily-sales.page.html',
  styleUrls: ['./track-daily-sales.page.scss'],
})
export class TrackDailySalesPage implements OnInit {
  public order = data
  tableStyle = 'bootstrap';
  temp = [];
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
