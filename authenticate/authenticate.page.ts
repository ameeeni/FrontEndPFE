import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticateService} from "./authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {

  constructor(private fb:FormBuilder ,
              private authService : AuthenticateService,
              private router:Router) { }
 userFormGroup! : FormGroup;
  email !:string;
  password ! : string;

  ngOnInit() {
    this.userFormGroup =this.fb.group({
      email : this.fb.control('' , [Validators.email,Validators.required ]),
      password : this.fb.control('' , [Validators.required , Validators.minLength(8)])
    })
  }

  handleSubmit() {
    let res =this.authService.login(this.email,this.password)
    if(res==true){
      this.router.navigateByUrl('menu/consulterComptes')
    }else {
      this.router.navigateByUrl('authenticate')
    }
  }
}
