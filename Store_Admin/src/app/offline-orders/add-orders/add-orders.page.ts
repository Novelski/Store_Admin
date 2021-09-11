import { Component, NgZone, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms'
import { OfflineOrdersService } from '../offline-orders.service'

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.page.html',
  styleUrls: ['./add-orders.page.scss'],
})
export class AddOrdersPage implements OnInit {
  demoform: FormGroup;
  constructor(private offlineOrderService: OfflineOrdersService,private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,) {
      this.demoform = this.fb.group({
        item_Name: [''],
        amount: [''],
        payment_Type: [''],
       
      })
     }

  ngOnInit() {
  }

  onFormSubmit () {
    if (!this.demoform.valid) {
      return false
    } else {
      this.offlineOrderService.addSong(this.demoform.value).subscribe(res => {
        this.zone.run(() => {
          console.log(res)
          this.demoform.reset()
          this.router.navigate(['/offline-orders'])
        })
      })
    }
  }

}
