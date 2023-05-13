import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificationInformationsPersoPage } from './modification-informations-perso.page';

const routes: Routes = [
  {
    path: '',
    component: ModificationInformationsPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificationInformationsPersoPageRoutingModule {}
