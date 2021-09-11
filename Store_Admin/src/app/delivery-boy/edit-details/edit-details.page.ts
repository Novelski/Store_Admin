import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryBoyService } from '../delivery-boy.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.page.html',
  styleUrls: ['./edit-details.page.scss'],
})
export class EditDetailsPage implements OnInit {
  updateItemForm: FormGroup;
  id:any;
  constructor(private deliveryservice:DeliveryBoyService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private actRoute: ActivatedRoute,) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
     }

  ngOnInit() {
    this.getItemData(this.id);
    this.updateItemForm = this.fb.group({
      name: [''],
      mailid: [''],
      age: [''],
      gender: [''],
      password: [''],
      adhaarNo: [''],
      mobileNumber: [''],
    })
  }
  getItemData(id){
    this.deliveryservice.getSong(id).subscribe(res=>{
      this.updateItemForm.setValue({
        name: res['name'],
      mailid: res['mailid'],
      age: res['age'],
      gender: res['gender'],
      password: res['password'],
      adhaarNo: res['adhaarNo'],
      mobileNumber: res['mobileNumber'],

      })
    })
  }

  updateForm(){
    if(!this.updateItemForm.valid){
      return false
    } else {
      this.deliveryservice.updateSong(this.id, this.updateItemForm.value)
      .subscribe((res)=>{
        console.log(res)
        this.updateItemForm.reset();
        this.router.navigate(['/delivery-boy'])
      })
    }
  }

}
