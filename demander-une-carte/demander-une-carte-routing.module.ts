import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemanderUneCartePage } from './demander-une-carte.page';

const routes: Routes = [
  {
    path: '',
    component: DemanderUneCartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemanderUneCartePageRoutingModule {}
