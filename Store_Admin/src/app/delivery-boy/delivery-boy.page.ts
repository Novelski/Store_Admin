import { Component,  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import data from '../../assets/Delivery_Boy.json';
import { AddDeliveryBoyComponent } from './add-delivery-boy/add-delivery-boy.component';
import { EditDeliveryBoyComponent } from './edit-delivery-boy/edit-delivery-boy.component';
@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.page.html',
  styleUrls: ['./delivery-boy.page.scss'],
})
export class DeliveryBoyPage  {
  public delivery = data;
  tableStyle = 'bootstrap';
  
    constructor(private modalCtrl: ModalController) {
    }

    async openModal(){
      const modal = await this.modalCtrl.create({
        component: AddDeliveryBoyComponent
      });
      await modal.present();
    }
      
    async openEdit(){
      const edit = await this.modalCtrl.create({
        component : EditDeliveryBoyComponent
      });
      await edit.present()
    }
    switchStyle(){
      if(this.tableStyle === 'dark'){
        this.tableStyle= 'bootstrap';
      }else {
        this.tableStyle = 'dark';
      }
    }
}
