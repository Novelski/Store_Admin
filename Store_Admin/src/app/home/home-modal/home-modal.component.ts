import { Component, } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss'],
})
export class HomeModalComponent  {

  constructor(public modalCtrl: ModalController) { }

  dismissModal(){
this.modalCtrl.dismiss();
  }

}
