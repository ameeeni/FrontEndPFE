import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashbordAchatPageRoutingModule } from './dashbord-achat-routing.module';

import { DashbordAchatPage } from './dashbord-achat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashbordAchatPageRoutingModule
  ],
  declarations: [DashbordAchatPage]
})
export class DashbordAchatPageModule {}
