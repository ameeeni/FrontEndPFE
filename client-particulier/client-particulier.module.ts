import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientParticulierPageRoutingModule } from './client-particulier-routing.module';

import { ClientParticulierPage } from './client-particulier.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientParticulierPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ClientParticulierPage]
})
export class ClientParticulierPageModule {}
