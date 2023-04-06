import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientParticulierPage } from './client-particulier.page';

const routes: Routes = [
  {
    path: '',
    component: ClientParticulierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientParticulierPageRoutingModule {}
