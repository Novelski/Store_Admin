import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HomeserviceService } from '../home/homeservice.service';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

demo:any = [];
  Inventory: any;

  constructor(private homeservice: DemoService, 
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
