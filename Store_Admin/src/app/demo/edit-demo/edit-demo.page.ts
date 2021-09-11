import { Component, NgZone, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DemoService } from '../demo.service'

@Component({
  selector: 'app-edit-demo',
  templateUrl: './edit-demo.page.html',
  styleUrls: ['./edit-demo.page.scss'],
})
export class EditDemoPage implements OnInit {
updateItemForm: FormGroup;
id:any;
  constructor( private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    private homeservice: DemoService,
    private actRoute: ActivatedRoute,) {
      this.id = this.actRoute.snapshot.paramMap.get('id');

     }

  ngOnInit() {
    this.getItemData(this.id);
    this.updateItemForm = this.fb.group({
      name: [''],
      type: [''],
      price: [''],
      itemCode: [''],
      quantity: ['']
    })
  }
  getItemData(id){
    this.homeservice.getSong(id).subscribe(res=>{
      this.updateItemForm.setValue({
        name: res['name'],
      type: res['type'],
      price: res['price'],
      itemCode: res['itemCode'],
      quantity: res['quantity']
      })
    })
  }


  updateForm(){
    if(!this.updateItemForm.valid){
      return false
    } else {
      this.homeservice.updateSong(this.id, this.updateItemForm.value)
      .subscribe((res)=>{
        console.log(res)
        this.updateItemForm.reset();
        this.router.navigate(['/demo'])
      })
    }
  }

}
