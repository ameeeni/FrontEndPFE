import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prise-rendez-vous',
  templateUrl: './prise-rendez-vous.page.html',
  styleUrls: ['./prise-rendez-vous.page.scss'],
})
export class PriseRendezVousPage implements OnInit {
  currentGov:undefined;
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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  compareWith(o1:any, o2:any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev:any) {
    this.currentGov = ev.target.value;
  }

  handleSubmit() {
    this.router.navigateByUrl('home')
  }
}
