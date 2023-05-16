import { Component, OnInit } from '@angular/core';
import {ClientPar} from "../client-particulier/client-par";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientParService} from "../client-particulier/client-par.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modification-informations-perso',
  templateUrl: './modification-informations-perso.page.html',
  styleUrls: ['./modification-informations-perso.page.scss'],
})
export class ModificationInformationsPersoPage implements OnInit {



  clientPar = new ClientPar();
  clientForm !: FormGroup;
  constructor(private fb : FormBuilder , private _service : ClientParService , private router:Router) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstname : this.fb.control('' ,[Validators.required]),
      lastname:this.fb.control('' ,[Validators.required]),
      email:this.fb.control('' ,[Validators.required]),
      phone:this.fb.control('' ,[Validators.required]),
      cin: this.fb.control('' ,[Validators.required]),
      date_de_naissance :this.fb.control('' ,[Validators.required]),
      adresse: this.fb.control('' , [Validators.required]),
      status : this.fb.control('', [Validators.required , Validators.email]),
    })
  }
  RegisterClientPar() {
    this._service.RegisterFromClientPar(this.clientPar).subscribe({
        next:data=>console.log(data),
        error:err => console.log(err)
      }
    );}
}
