import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demander-une-carte',
  templateUrl: './demander-une-carte.page.html',
  styleUrls: ['./demander-une-carte.page.scss'],
})
export class DemanderUneCartePage implements OnInit {
 carte = ['DINARPOST VISA Electron' , " e-DINAR SMART" ," e-DINAR UNIVERSEL"]
  gouvernorat = [
    "l'Ariana",
    "Béja",
    "Ben Arous",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kébili",
    "Gouvernorat du Kef",
    "Mahdia",
    "Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan",
  ]
  constructor() { }

  ngOnInit() {
  }

}
