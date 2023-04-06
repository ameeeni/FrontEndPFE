import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImporterComptesPage } from './importer-comptes.page';

const routes: Routes = [
  {
    path: '',
    component: ImporterComptesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImporterComptesPageRoutingModule {}
