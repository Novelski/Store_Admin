/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service'
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {
  AccountForm: FormGroup;
  type: boolean = true;
  tokenInfo: any;
  constructor(private router: Router,private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.AccountForm = this.formBuilder.group({
      userName:['',[Validators.required,]],
      password: ['',[Validators.required,]],
   
    });
  }

  changeType(){
    this.type = !this.type;
  }

  submit() {
    
    let values: any = this.AccountForm.value;
    this.authService.login(values).subscribe(res => {
      
      this.getSuccess(res);
    },
      (err: any) => {
        this.router.navigateByUrl('/login-screen');
        alert("please enter correct user name and password");
      }
    );
  }
  getSuccess(res) {
    this.tokenInfo = res;
    
    if (this.tokenInfo != null) {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
