import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdonnerUnVirementPageRoutingModule } from './ordonner-un-virement-routing.module';

import { OrdonnerUnVirementPage } from './ordonner-un-virement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OrdonnerUnVirementPageRoutingModule
  ],
  declarations: [OrdonnerUnVirementPage]
})
export class OrdonnerUnVirementPageModule {}
