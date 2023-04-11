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
      icon : 'briefcase-outline',
      children  : [
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
      ],
    }, {
    title : 'Operations',
      icon : 'briefcase-outline',
      children: [
        {
          title:'Virements ',
          url :'menu/consulterComptes',
          icon:'briefcase-outline'
        }, {
          title:'Cartes ',
          url :'menu/dashbordAchat',
          icon:'briefcase-outline'
        }
      ]
    }, {
      title : 'Profiles',
      icon : 'briefcase-outline',
      children: [
        {
          title:'Informations Personnelles ',
          url :'menu/consulterComptes',
          icon:'briefcase-outline'
        }, {
          title:'Changer le mot de passe ',
          url :'menu/dashbordAchat',
          icon:'briefcase-outline'
        }
      ]

    }, {
    title:'Messangerie',
      icon : 'briefcase-outline',
      children: [
        {
          title:'Envoyer un message au Support ',
        }, {
          title:'Consulter mes Messages'
        }
      ]
    }
    ]
   infos = [
     {
       title : "Notifications",
     },
     {
       title : "Réseau Postal et file d'attente",
     },
     {
       title : "Cours de Change ",
     },
     {
       title : "A propos myPosteBank",
     },
     {
       title : "Comment ça marche",
     },{
       title : "FAQ",
     }
   ]

  constructor() {
  }

  ngOnInit() {
  }

}
