import { Component, NgZone, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder } from '@angular/forms'
import { HomeserviceService } from '../homeservice.service'


@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.page.html',
  styleUrls: ['./home-edit.page.scss'],
})
export class HomeEditPage implements OnInit {
  updateItemForm: FormGroup;
  id:any;
  constructor(private router: Router,private homeservice: HomeserviceService, private actRoute: ActivatedRoute, public fb: FormBuilder,
    private zone: NgZone,) { 
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
          this.router.navigate(['/home'])
        })
      }
    }

}
