import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage ,
    children : [
      {
        path: 'consulterComptes',
        loadChildren: () => import('../consulter-mes-comptes/consulter-mes-comptes.module').then( m => m.ConsulterMesComptesPageModule)
      },/*{
        path: 'nouveauCompte',
        loadChildren: () => import('../nouveau-compte/nouveau-compte.module').then( m => m.NouveauComptePageModule)
      },*/ {
        path: 'dashbordAchat',
        loadChildren: () => import('../dashbord-achat/dashbord-achat.module').then( m => m.DashbordAchatPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
