import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProfessionnelPage } from './client-professionnel.page';

const routes: Routes = [
  {
    path: '',
    component: ClientProfessionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientProfessionnelPageRoutingModule {}
