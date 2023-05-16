import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentCaMarchePageRoutingModule } from './comment-ca-marche-routing.module';

import { CommentCaMarchePage } from './comment-ca-marche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentCaMarchePageRoutingModule
  ],
  declarations: [CommentCaMarchePage]
})
export class CommentCaMarchePageModule {}
