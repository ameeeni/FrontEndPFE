import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationsPersoPageRoutingModule } from './informations-perso-routing.module';

import { InformationsPersoPage } from './informations-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationsPersoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InformationsPersoPage]
})
export class InformationsPersoPageModule {}
