import { Component, NgZone, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DemoService } from '../demo.service'
@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.page.html',
  styleUrls: ['./add-demo.page.scss']
})
export class AddDemoPage implements OnInit {
  demoform: FormGroup;
  constructor (
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private homeservice: DemoService
  ) {
    this.demoform = this.fb.group({
      name: [''],
      type: [''],
      price: [''],
      code: [''],
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
          this.router.navigate(['/demo'])
        })
      })
    }
  }
}
