import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordAchatPage } from './dashbord-achat.page';

const routes: Routes = [
  {
    path: '',
    component: DashbordAchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordAchatPageRoutingModule {}
