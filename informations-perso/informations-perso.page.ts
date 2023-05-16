import { Component, OnInit } from '@angular/core';
import {ClientPar} from "../client-particulier/client-par";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientParService} from "../client-particulier/client-par.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-informations-perso',
  templateUrl: './informations-perso.page.html',
  styleUrls: ['./informations-perso.page.scss'],
})
export class InformationsPersoPage implements OnInit {

  clientPar = new ClientPar();
  clientForm !: FormGroup;
  clientProForm !:FormGroup;
  constructor(private fb : FormBuilder , private _service : ClientParService , private router:Router) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      adresse: this.fb.control('' , [Validators.required]),
      status : this.fb.control('', [Validators.required , Validators.email]),
      profession : this.fb.control('' , [Validators.required]),
    })
    this.clientProForm = this.fb.group({
      matricule_fiscale: this.fb.control(''),
      raison_social : this.fb.control(''),
      numero_registre:this.fb.control('')
    })
  }
  RegisterClientPar() {
    this._service.RegisterFromClientPar(this.clientPar).subscribe({
        next:data=>console.log(data),
        error:err => console.log(err)
      }
    );}

}
