import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeDeComptePage } from './type-de-compte.page';

const routes: Routes = [
  {
    path: '',
    component: TypeDeComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeDeComptePageRoutingModule {}
