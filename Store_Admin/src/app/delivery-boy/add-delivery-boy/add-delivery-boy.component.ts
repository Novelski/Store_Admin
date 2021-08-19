import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-delivery-boy',
  templateUrl: './add-delivery-boy.component.html',
  styleUrls: ['./add-delivery-boy.component.scss'],
})
export class AddDeliveryBoyComponent {

  constructor(public modalCtrl: ModalController) { }

  dismissModal(){
this.modalCtrl.dismiss();
  }
}
