import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiairesPageRoutingModule } from './beneficiaires-routing.module';

import { BeneficiairesPage } from './beneficiaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiairesPageRoutingModule
  ],
  declarations: [BeneficiairesPage]
})
export class BeneficiairesPageModule {}
