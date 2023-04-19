import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientParService} from "./client-par.service";
import {ClientPar} from "./client-par";

@Component({
  selector: 'app-client-particulier',
  templateUrl: './client-particulier.page.html',
  styleUrls: ['./client-particulier.page.scss'],
})
export class ClientParticulierPage implements OnInit {
  clientPar = new ClientPar();
  clientParForm !: FormGroup;
  constructor(private fb : FormBuilder , private _service : ClientParService) { }

  ngOnInit() {
    this.clientParForm = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
      lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      mot_de_passe : this.fb.control('', [Validators.required , Validators.minLength(8)]),
      reValidpassword : this.fb.control('' , [Validators.required , Validators.minLength(8)]),
      cin : this.fb.control('' , [Validators.required]),
      date_de_naissance : this.fb.control('', [Validators.required]),
      lieu_de_naissance : this.fb.control('', [Validators.required]),
      profession : this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required])
    })
  }

  RegisterClientPar() {
   this._service.RegisterFromClientPar(this.clientPar).subscribe({
     next:data=>console.log(data),
     error:err => console.log(err)
   }
   );}
 /* onSubmit() {
    console.log(this.clientParForm.value)
  }*/
}
