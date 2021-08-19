import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-delivery-boy',
  templateUrl: './edit-delivery-boy.component.html',
  styleUrls: ['./edit-delivery-boy.component.scss'],
})
export class EditDeliveryBoyComponent  {
  constructor(public modalCtrl: ModalController) { }

  dismissModal(){
this.modalCtrl.dismiss();
  }
}
