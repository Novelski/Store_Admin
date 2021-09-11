import { Component, NgZone, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DeliveryBoyService } from '../delivery-boy.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.page.html',
  styleUrls: ['./add-details.page.scss'],
})
export class AddDetailsPage implements OnInit {
  demoform: FormGroup;
  constructor(private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private deliveryservice:DeliveryBoyService) {
      this.demoform = this.fb.group({
        name: [''],
        mailid: [''],
        age: [''],
        gender: [''],
        password: [''],
        adhaarNo: [''],
        mobileNumber: [''],
      })
     }

  ngOnInit() {
  }

  onFormSubmit () {
    if (!this.demoform.valid) {
      return false
    } else {
      this.deliveryservice.addSong(this.demoform.value).subscribe(res => {
        this.zone.run(() => {
          console.log(res)
          this.demoform.reset()
          this.router.navigate(['/delivery-boy'])
        })
      })
    }
  }

}
