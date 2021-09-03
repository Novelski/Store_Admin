import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import data from '../../assets/Offline_orders.json'
import { AddOfflineComponent } from './add-offline/add-offline.component'
@Component({
  selector: 'app-offline-orders',
  templateUrl: './offline-orders.page.html',
  styleUrls: ['./offline-orders.page.scss']
})
export class OfflineOrdersPage implements OnInit {
  public offlineorder = data
  tableStyle = 'bootstrap'
  constructor (private modalCtrl: ModalController) {}

  ngOnInit () {}

  switchStyle () {
    if (this.tableStyle === 'dark') {
      this.tableStyle = 'bootstrap'
    } else {
      this.tableStyle = 'dark'
    }
  }

  async openModal () {
    const modal = await this.modalCtrl.create({
      component: AddOfflineComponent
    })
    await modal.present()
  }
}
