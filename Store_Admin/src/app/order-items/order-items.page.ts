import { Order } from './order.model';
import { Component, OnInit } from '@angular/core';

import { OrderService } from './order.service';
import { ModalController } from '@ionic/angular';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.page.html',
  styleUrls: ['./order-items.page.scss'],
})
export class OrderItemsPage implements OnInit {
  tableStyle = 'bootstrap'
 order : Order[];
  constructor (private orderService: OrderService,
    private modalCtrl: ModalController) {}

  ngOnInit () {
    this.order = this.orderService.getAllOrders();
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
      component: OrderModalComponent
    });
    await modal.present();
  }
}
