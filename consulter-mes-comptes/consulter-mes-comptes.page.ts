import { Component, OnInit } from '@angular/core';
import {ConsulterMesComptesService} from "./consulter-mes-comptes.service";
import {AccountClass} from "./account-class.model";

@Component({
  selector: 'app-consulter-mes-comptes',
  templateUrl: './consulter-mes-comptes.page.html',
  styleUrls: ['./consulter-mes-comptes.page.scss'],
})
export class ConsulterMesComptesPage implements OnInit {




  solde! : bigint;
  constructor(private _consulterMesComptes :ConsulterMesComptesService) { }
 compte1 = new AccountClass();
  ngOnInit() {
    this._consulterMesComptes.getAccountById()
      .subscribe({
      next:(data)=>console.log(this.compte1=data),
      error:err => console.log(err)
    });

  }



}
