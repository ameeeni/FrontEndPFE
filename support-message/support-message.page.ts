import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-message',
  templateUrl: './support-message.page.html',
  styleUrls: ['./support-message.page.scss'],
})
export class SupportMessagePage implements OnInit {
  currentObjet=undefined;
  objets = [
    'CCP', "Epargne", "SICAV" , "MyPoste", "MONETIQUE", "Mandat", "ASSURANCE", "D17", "COURRIER",
    "COLIS" , "TELEGRAM" , "E-COMMERCE" , "FACTURE", "AUTRE SERVICE"
  ]
  constructor() { }

  ngOnInit() {
  }
  compareWith(o1:any, o2:any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev:any) {
    this.currentObjet = ev.target.value;
  }
}
