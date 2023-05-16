import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsPersonnelleInscrirePage } from './documents-personnelle-inscrire.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsPersonnelleInscrirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPersonnelleInscrirePageRoutingModule {}
