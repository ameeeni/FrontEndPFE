import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsPersoPage } from './documents-perso.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPersoPageRoutingModule {}
