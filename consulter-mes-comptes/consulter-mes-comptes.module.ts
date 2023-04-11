import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterMesComptesPageRoutingModule } from './consulter-mes-comptes-routing.module';

import { ConsulterMesComptesPage } from './consulter-mes-comptes.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConsulterMesComptesPageRoutingModule
    ],
    exports: [
        ConsulterMesComptesPage
    ],
    declarations: [ConsulterMesComptesPage]
})
export class ConsulterMesComptesPageModule {}
