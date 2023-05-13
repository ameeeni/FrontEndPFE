import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterMessageriePageRoutingModule } from './consulter-messagerie-routing.module';

import { ConsulterMessageriePage } from './consulter-messagerie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterMessageriePageRoutingModule
  ],
  declarations: [ConsulterMessageriePage]
})
export class ConsulterMessageriePageModule {}
