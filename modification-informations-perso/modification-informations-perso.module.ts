import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificationInformationsPersoPageRoutingModule } from './modification-informations-perso-routing.module';

import { ModificationInformationsPersoPage } from './modification-informations-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificationInformationsPersoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModificationInformationsPersoPage]
})
export class ModificationInformationsPersoPageModule {}
