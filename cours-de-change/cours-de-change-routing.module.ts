import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursDeChangePage } from './cours-de-change.page';

const routes: Routes = [
  {
    path: '',
    component: CoursDeChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursDeChangePageRoutingModule {}
