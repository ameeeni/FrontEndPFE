import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImporterComptesPageRoutingModule } from './importer-comptes-routing.module';

import { ImporterComptesPage } from './importer-comptes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImporterComptesPageRoutingModule
  ],
  declarations: [ImporterComptesPage]
})
export class ImporterComptesPageModule {}
