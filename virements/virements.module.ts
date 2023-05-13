import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirementsPageRoutingModule } from './virements-routing.module';

import { VirementsPage } from './virements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirementsPageRoutingModule
  ],
  declarations: [VirementsPage]
})
export class VirementsPageModule {}
