import { ToastController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { AlertController, ModalController } from '@ionic/angular';
import { HomeEditComponent } from './home-edit/home-edit.component';
import { HomeserviceService } from './homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
inventory :any;
loadingIndicator: boolean =true;
reorderable: boolean = true;
tableStyle = 'bootstrap';


  constructor(private modalCtrl: ModalController,
    private homeservice: HomeserviceService, 
    private alertCntrl: AlertController,
    ) {
    
  }

  ngOnInit() {
    this.homeservice.getAllInventory().subscribe(inventory=> this.inventory = inventory)
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
