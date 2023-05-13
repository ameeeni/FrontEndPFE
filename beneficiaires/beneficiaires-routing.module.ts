import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiairesPage } from './beneficiaires.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiairesPageRoutingModule {}
