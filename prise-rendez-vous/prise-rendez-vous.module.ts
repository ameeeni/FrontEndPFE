import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriseRendezVousPageRoutingModule } from './prise-rendez-vous-routing.module';

import { PriseRendezVousPage } from './prise-rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriseRendezVousPageRoutingModule
  ],
  declarations: [PriseRendezVousPage]
})
export class PriseRendezVousPageModule {}
