import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientPro} from "./client-pro";
import {ClientParService} from "../client-particulier/client-par.service";
import {ClientProService} from "./client-pro.service";

@Component({
  selector: 'app-client-professionnel',
  templateUrl: './client-professionnel.page.html',
  styleUrls: ['./client-professionnel.page.scss'],
})
export class ClientProfessionnelPage implements OnInit {
clientProForm! : FormGroup;
clientPro = new ClientPro();
  constructor(private fb: FormBuilder , private _service : ClientProService) { }

  ngOnInit() {
    this.clientProForm = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
      lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      mot_de_passe : this.fb.control('', [Validators.required , Validators.minLength(8)]),
      reValidpassword : this.fb.control('' , [Validators.required , Validators.minLength(8)]),
      matricule_fiscale : this.fb.control('' ,[Validators.required]),
      raison_social :  this.fb.control('' ,[Validators.required]) ,
      numero_registre_commerce : this.fb.control('' ,[Validators.required])
    })
  }

  RegisterClientPro() {
    this._service.RegisterFromClientPro(this.clientPro).subscribe({
      next:data=>console.log(data),
      error:err => console.log(err)
    });
  }
}
