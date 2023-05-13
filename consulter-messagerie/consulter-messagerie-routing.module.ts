import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterMessageriePage } from './consulter-messagerie.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterMessageriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterMessageriePageRoutingModule {}
