import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  dismissModal(){
this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
