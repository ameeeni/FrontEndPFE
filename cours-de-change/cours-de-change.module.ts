import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursDeChangePageRoutingModule } from './cours-de-change-routing.module';

import { CoursDeChangePage } from './cours-de-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursDeChangePageRoutingModule
  ],
  declarations: [CoursDeChangePage]
})
export class CoursDeChangePageModule {}
