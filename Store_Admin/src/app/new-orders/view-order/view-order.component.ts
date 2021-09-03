import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import data from '../../../assets/NewOrders.json';
@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss'],
})
export class ViewOrderComponent implements OnInit {
  public neworder = data;
  constructor(public modalCtrl: ModalController) { }

 

  ngOnInit() {}
  dismissModal(){
    this.modalCtrl.dismiss();
      }
}
