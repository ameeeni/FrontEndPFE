import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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
          url :'nouveauCompte',
          icon:'briefcase-outline'
        }
      ],
    }, {
    title : 'Operations',
      icon : 'briefcase-outline',
      children: [
        {
          title:'Virements ',
          url :'virements',
          icon:'briefcase-outline'
        }, {
          title:'Cartes ',
          url :'cartes',
          icon:'briefcase-outline'
        }
      ]
    }, {
      title : 'Profiles',
      icon : 'briefcase-outline',
      children: [
        {
          title:'Informations Personnelles ',
          url :'modification-informations-perso',
          icon:'briefcase-outline'
        }, {
          title:'Changer le mot de passe ',
          url :'changer-mot-de-passe',
          icon:'briefcase-outline'
        }
      ]

    }, {
    title:'Messangerie',
      icon : 'briefcase-outline',
      children: [
        {
          title:'Envoyer un message au Support ',
          url :'support-message',
        }, {
          title:'Consulter mes Messages' ,
          url:'consulter-messagerie'
        }
      ]
    }
    ]
   infos = [
     {
       title : "Notifications",
       url :'notifications'
     },


     {
       title : "A propos myPosteBank",
       url:'apropos'
     },
     {
       title : "Comment ça marche",
       url:'comment-ca-marche'
     },{
       title : "FAQ",
       url:"faq"
     }
   ]

  constructor(private  router:Router) {
  }

  ngOnInit() {
  }
  onMenuItem(m : any){
    this.router.navigateByUrl(m.url);
  }

}
