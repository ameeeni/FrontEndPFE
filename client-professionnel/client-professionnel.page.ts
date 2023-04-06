import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-professionnel',
  templateUrl: './client-professionnel.page.html',
  styleUrls: ['./client-professionnel.page.scss'],
})
export class ClientProfessionnelPage implements OnInit {
clientProForm! : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientProForm = this.fb.group({
      matricule_fiscale : this.fb.control('' ,[Validators.required]),
      raison_social :  this.fb.control('' ,[Validators.required]) ,
      numero_registre_commerce : this.fb.control('' ,[Validators.required])
    })
  }

}
