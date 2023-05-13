import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdonnerUnVirementPage } from './ordonner-un-virement.page';

const routes: Routes = [
  {
    path: '',
    component: OrdonnerUnVirementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdonnerUnVirementPageRoutingModule {}
