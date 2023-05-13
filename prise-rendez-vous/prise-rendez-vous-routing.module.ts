import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriseRendezVousPage } from './prise-rendez-vous.page';

const routes: Routes = [
  {
    path: '',
    component: PriseRendezVousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriseRendezVousPageRoutingModule {}
