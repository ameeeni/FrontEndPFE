import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdonnerUnVirementPageRoutingModule } from './ordonner-un-virement-routing.module';

import { OrdonnerUnVirementPage } from './ordonner-un-virement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdonnerUnVirementPageRoutingModule
  ],
  declarations: [OrdonnerUnVirementPage]
})
export class OrdonnerUnVirementPageModule {}
