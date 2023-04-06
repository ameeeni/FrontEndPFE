import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },{
    path: 'authenticate',
    loadChildren: () => import('./authenticate/authenticate.module').then( m => m.AuthenticatePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./authenticate/authenticate.module').then( m => m.AuthenticatePageModule)
  },
  {
    path: 'client-professionnel',
    loadChildren: () => import('./client-professionnel/client-professionnel.module').then( m => m.ClientProfessionnelPageModule)
  },
  {
    path: 'client-particulier',
    loadChildren: () => import('./client-particulier/client-particulier.module').then( m => m.ClientParticulierPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'consulterComptes',
    loadChildren: () => import('./consulter-mes-comptes/consulter-mes-comptes.module').then( m => m.ConsulterMesComptesPageModule)
  },
  {
    path: 'nouveauCompte',
    loadChildren: () => import('./nouveau-compte/nouveau-compte.module').then( m => m.NouveauComptePageModule)
  },
  {
    path: 'importerCompte',
    loadChildren: () => import('./importer-comptes/importer-comptes.module').then( m => m.ImporterComptesPageModule)
  },
  {
    path: 'dashbordAchat',
    loadChildren: () => import('./dashbord-achat/dashbord-achat.module').then( m => m.DashbordAchatPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
