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
  },{
    path: 'nouveauCompte',
    loadChildren: () => import('./nouveau-compte/nouveau-compte.module').then( m => m.NouveauComptePageModule)
  },
  {
    path: 'identite-client',
    loadChildren: () => import('./identite-client/identite-client.module').then( m => m.IdentiteClientPageModule)
  },
  {
    path: 'informations-perso',
    loadChildren: () => import('./informations-perso/informations-perso.module').then( m => m.InformationsPersoPageModule)
  },
  {
    path: 'documents-perso',
    loadChildren: () => import('./documents-perso/documents-perso.module').then( m => m.DocumentsPersoPageModule)
  },
  {
    path: 'cartes',
    loadChildren: () => import('./cartes/cartes.module').then( m => m.CartesPageModule)
  },
  {
    path: 'demander-une-carte',
    loadChildren: () => import('./demander-une-carte/demander-une-carte.module').then( m => m.DemanderUneCartePageModule)
  },
  {
    path: 'virements',
    loadChildren: () => import('./virements/virements.module').then( m => m.VirementsPageModule)
  },
  {
    path: 'ordonner-un-virement',
    loadChildren: () => import('./ordonner-un-virement/ordonner-un-virement.module').then( m => m.OrdonnerUnVirementPageModule)
  },

  {
    path: 'modification-informations-perso',
    loadChildren: () => import('./modification-informations-perso/modification-informations-perso.module').then( m => m.ModificationInformationsPersoPageModule)
  },
  {
    path: 'changer-mot-de-passe',
    loadChildren: () => import('./changer-mot-de-passe/changer-mot-de-passe.module').then( m => m.ChangerMotDePassePageModule)
  },
  {
    path: 'support-message',
    loadChildren: () => import('./support-message/support-message.module').then( m => m.SupportMessagePageModule)
  },
  {
    path: 'consulter-messagerie',
    loadChildren: () => import('./consulter-messagerie/consulter-messagerie.module').then( m => m.ConsulterMessageriePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },

  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'comment-ca-marche',
    loadChildren: () => import('./comment-ca-marche/comment-ca-marche.module').then( m => m.CommentCaMarchePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'documents-personnelle-inscrire',
    loadChildren: () => import('./documents-personnelle-inscrire/documents-personnelle-inscrire.module').then( m => m.DocumentsPersonnelleInscrirePageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'comment-ca-marche',
    loadChildren: () => import('./comment-ca-marche/comment-ca-marche.module').then( m => m.CommentCaMarchePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },  {
    path: 'type-de-compte',
    loadChildren: () => import('./type-de-compte/type-de-compte.module').then( m => m.TypeDeComptePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
