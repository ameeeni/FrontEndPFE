import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemanderUneCartePageRoutingModule } from './demander-une-carte-routing.module';

import { DemanderUneCartePage } from './demander-une-carte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemanderUneCartePageRoutingModule
  ],
  declarations: [DemanderUneCartePage]
})
export class DemanderUneCartePageModule {}
