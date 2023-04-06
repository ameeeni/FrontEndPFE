import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterMesComptesPage } from './consulter-mes-comptes.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterMesComptesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterMesComptesPageRoutingModule {}
