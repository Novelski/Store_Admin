import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import data from '../../assets/NewOrders.json';
import { NewOrdersService } from './new-orders.service';
import { ViewOrderComponent } from './view-order/view-order.component';
@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.page.html',
  styleUrls: ['./new-orders.page.scss'],
})
export class NewOrdersPage implements OnInit {
 neworder:any;
  tableStyle = 'bootstrap'
  constructor (private modalCtrl: ModalController, private neworderService: NewOrdersService) {}

  ngOnInit () {
    this.neworderService.getAllNewOrders().subscribe(neworder=> this.neworder = neworder)
  }

  switchStyle () {
    if (this.tableStyle === 'dark') {
      this.tableStyle = 'bootstrap'
    } else {
      this.tableStyle = 'dark'
    }
  }
  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ViewOrderComponent
    });
    await modal.present();
  }

}
