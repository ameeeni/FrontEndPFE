import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentiteClientPageRoutingModule } from './identite-client-routing.module';

import { IdentiteClientPage } from './identite-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentiteClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IdentiteClientPage]
})
export class IdentiteClientPageModule {}
