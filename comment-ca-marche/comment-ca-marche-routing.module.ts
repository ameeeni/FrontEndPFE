import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentCaMarchePage } from './comment-ca-marche.page';

const routes: Routes = [
  {
    path: '',
    component: CommentCaMarchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentCaMarchePageRoutingModule {}
