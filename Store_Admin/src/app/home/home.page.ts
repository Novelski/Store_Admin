/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-trailing-spaces */
import { Component } from '@angular/core';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { ModalController } from '@ionic/angular';
import data from '../../assets/inventory.json';
import { HomeEditComponent } from './home-edit/home-edit.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public inventory = data;
tableStyle = 'bootstrap';

  constructor(private modalCtrl: ModalController) {
    
  }
  switchStyle(){
    if(this.tableStyle === 'dark'){
      this.tableStyle= 'bootstrap';
    }else {
      this.tableStyle = 'dark';
    }
  }

async openModal(){
  const modal = await this.modalCtrl.create({
    component: HomeModalComponent
  });
  await modal.present();
}
  
async openEdit(){
  const edit = await this.modalCtrl.create({
    component : HomeEditComponent 
  });

  await edit.present()
}

}
