import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { OfflineOrdersService } from './offline-orders.service';
@Component({
  selector: 'app-offline-orders',
  templateUrl: './offline-orders.page.html',
  styleUrls: ['./offline-orders.page.scss']
})
export class OfflineOrdersPage implements OnInit {
 offlineorder:any = [];
  tableStyle = 'bootstrap'
  constructor (private offlineOrderService: OfflineOrdersService, private router: Router) {}

  ngOnInit () {}

  switchStyle () {
    if (this.tableStyle === 'dark') {
      this.tableStyle = 'bootstrap'
    } else {
      this.tableStyle = 'dark'
    }
  }
  ionViewDidEnter() {
    this.offlineOrderService.getItemList().subscribe((res) => {
      console.log(res)
      this.offlineorder = res;
    })
  }

  
  reloadData(){
    this.offlineorder = this.offlineOrderService.getItemList();
  }
  deleteSong(id) {
    if (window.confirm('Do you want to delete Item?')) {
      this.offlineOrderService.deleteItem(id)
        .subscribe(() => {
          this.offlineorder.splice(id, 1);
          console.log('Item deleted!')
          this.reloadData();
        }
        )
    }
  }


}
