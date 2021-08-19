/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  form: FormGroup;
  type: boolean = true;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      newpassword: new FormControl(null, {
        validators: [Validators.required],
      }),
      cnfpassword: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
  changeType(){
    this.type = !this.type;
  }

}
