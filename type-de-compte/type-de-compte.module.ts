import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeDeComptePageRoutingModule } from './type-de-compte-routing.module';

import { TypeDeComptePage } from './type-de-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeDeComptePageRoutingModule
  ],
  declarations: [TypeDeComptePage]
})
export class TypeDeComptePageModule {}
