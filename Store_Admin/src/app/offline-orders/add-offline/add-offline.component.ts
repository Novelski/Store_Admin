import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-offline',
  templateUrl: './add-offline.component.html',
  styleUrls: ['./add-offline.component.scss'],
})
export class AddOfflineComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  

  dismissModal(){
this.modalCtrl.dismiss();
  }
}
