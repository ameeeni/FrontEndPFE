import { Component, OnInit } from '@angular/core';
import {ClientPar} from "../client-particulier/client-par";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientParService} from "../client-particulier/client-par.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-identite-client',
  templateUrl: './identite-client.page.html',
  styleUrls: ['./identite-client.page.scss'],
})
export class IdentiteClientPage implements OnInit {
  clientPar = new ClientPar();
  clientParForm !: FormGroup;
  constructor(private fb : FormBuilder , private _service : ClientParService , private router:Router) { }

  ngOnInit() {
    this.clientParForm = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
      lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      cin : this.fb.control('' , [Validators.required]),
      date_de_naissance : this.fb.control('', [Validators.required]),
      lieu_de_naissance : this.fb.control('', [Validators.required])
  })

  }
  RegisterClientPar() {
    this._service.RegisterFromClientPar(this.clientPar).subscribe({
        next:data=>console.log(data),
        error:err => console.log(err)
      }
    );}


}
