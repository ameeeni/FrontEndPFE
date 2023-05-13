import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationsPersoPage } from './informations-perso.page';

const routes: Routes = [
  {
    path: '',
    component: InformationsPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationsPersoPageRoutingModule {}
