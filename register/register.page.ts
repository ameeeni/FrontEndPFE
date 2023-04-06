import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   registerFormGroup! : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
      lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      password : this.fb.control('', [Validators.required , Validators.minLength(8)]),
      reValidpassword : this.fb.control('' , [Validators.required , Validators.minLength(8)])
    })
  }

}
