import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPersonnelleInscrirePageRoutingModule } from './documents-personnelle-inscrire-routing.module';

import { DocumentsPersonnelleInscrirePage } from './documents-personnelle-inscrire.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentsPersonnelleInscrirePageRoutingModule,
        ReactiveFormsModule,
    ],
  declarations: [DocumentsPersonnelleInscrirePage]
})
export class DocumentsPersonnelleInscrirePageModule {}
