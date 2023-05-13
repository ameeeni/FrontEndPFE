import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirementsPage } from './virements.page';

const routes: Routes = [
  {
    path: '',
    component: VirementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirementsPageRoutingModule {}
