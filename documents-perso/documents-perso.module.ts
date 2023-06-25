import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPersoPageRoutingModule } from './documents-perso-routing.module';

import { DocumentsPersoPage } from './documents-perso.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPersoPageRoutingModule
  ],
  declarations: [DocumentsPersoPage]
})
export class DocumentsPersoPageModule {}
