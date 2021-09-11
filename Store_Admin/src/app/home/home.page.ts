import { ToastController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';

import { AlertController, ModalController } from '@ionic/angular';

import { HomeserviceService } from './homeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  demo:any = [];
  Inventory: any;

  constructor(private homeservice: HomeserviceService, 
    private alertCntrl: AlertController,
    private router: Router) { }

  ngOnInit() {
    
  }
  ionViewDidEnter() {
    this.homeservice.getItemList().subscribe((res) => {
      console.log(res)
      this.demo = res;
    })
  }

  reloadData(){
    this.demo = this.homeservice.getItemList();
  }
  deleteSong(id) {
    if (window.confirm('Do you want to delete Item?')) {
      this.homeservice.deleteItem(id)
        .subscribe(() => {
          this.demo.splice(id, 1);
          console.log('Item deleted!')
          this.reloadData();
        }
        )
    }
  }

}
