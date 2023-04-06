import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientProfessionnelPageRoutingModule } from './client-professionnel-routing.module';

import { ClientProfessionnelPage } from './client-professionnel.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientProfessionnelPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ClientProfessionnelPage]
})
export class ClientProfessionnelPageModule {}
