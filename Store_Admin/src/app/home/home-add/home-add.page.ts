import { Component, NgZone, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms'
import { HomeserviceService } from '../homeservice.service'

@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.page.html',
  styleUrls: ['./home-add.page.scss'],
})
export class HomeAddPage implements OnInit {
  demoform: FormGroup;
  constructor(private homeservice: HomeserviceService,private router: Router,
    public fb: FormBuilder,
    private zone: NgZone, ) { 
      this.demoform = this.fb.group({
        name: [''],
        type: [''],
        price: [''],
        itemCode: [''],
        quantity: ['']
      })
    }

    ngOnInit () {}
    onFormSubmit () {
      if (!this.demoform.valid) {
        return false
      } else {
        this.homeservice.addSong(this.demoform.value).subscribe(res => {
          this.zone.run(() => {
            console.log(res)
            this.demoform.reset()
            this.router.navigate(['/home'])
          })
        })
      }
    }

}
