import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentiteClientPage } from './identite-client.page';

const routes: Routes = [
  {
    path: '',
    component: IdentiteClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentiteClientPageRoutingModule {}
