import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
})
export class HomeEditComponent  {

  constructor(public modalCtrl: ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
      }
}
