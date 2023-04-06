import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {

  constructor(private fb:FormBuilder) { }
 userFormGroup! : FormGroup;

  ngOnInit() {
    this.userFormGroup =this.fb.group({
      email : this.fb.control('' , [Validators.email,Validators.required ]),
      password : this.fb.control('' , [Validators.required , Validators.minLength(8)])
    })
  }

  handleSubmit() {
    console.log(this.userFormGroup.value)
  }
}
