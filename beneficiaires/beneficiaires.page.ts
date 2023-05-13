import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiaires',
  templateUrl: './beneficiaires.page.html',
  styleUrls: ['./beneficiaires.page.scss'],
})
export class BeneficiairesPage implements OnInit {
banque= ["BNA" , "UIB", "Biat" , "STB" , "Banque de Tunisie" , "BTK" , "La poste Tunisienne"]
  constructor() { }

  ngOnInit() {
  }

}
