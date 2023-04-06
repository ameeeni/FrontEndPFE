import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title:'Comptes',
      children : [
        {
          title:'Consulter mes comptes ',
          url :'menu/consulterComptes',
          icon:'briefcase-outline'
        }, {
          title:'Dashbord de mes achats ',
          url :'menu/dashbordAchat',
          icon:'briefcase-outline'
        } ,{
          title:'Ouvrir un compte ',
          url :'menu/nouveauCompte',
          icon:'briefcase-outline'
        },{
          title:'importer un nouveau compte ',
          url :'menu/importerCompte',
          icon:'briefcase-outline'
        }
      ]
    }
    ]
  constructor() { }

  ngOnInit() {
  }

}
