import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import data from '../../assets/Delivery_Boy.json';


import { DeliveryBoyService } from './delivery-boy.service';

@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.page.html',
  styleUrls: ['./delivery-boy.page.scss'],
})
export class DeliveryBoyPage implements OnInit {
  demo:any = [];
  Inventory: any;
  tableStyle = 'bootstrap';
  
    constructor(private modalCtrl: ModalController,
      private deliveryservice: DeliveryBoyService,
      private router: Router ) {
    }
    ngOnInit() {
     
    }

    ionViewDidEnter() {
      this.deliveryservice.getItemList().subscribe((res) => {
        console.log(res)
        this.demo = res;
      })
    }
  
    reloadData(){
      this.demo = this.deliveryservice.getItemList();
    }

    switchStyle(){
      if(this.tableStyle === 'dark'){
        this.tableStyle= 'bootstrap';
      }else {
        this.tableStyle = 'dark';
      }
    }


    deleteItem(id) {
      if (window.confirm('Do you want to delete Item?')) {
        this.deliveryservice.deleteItem(id)
          .subscribe(() => {
            this.demo.splice(id, 1);
            console.log('Item deleted!')
            this.reloadData();
          }
          )
      }
    }
}
