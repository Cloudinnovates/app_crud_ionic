import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsAddPageRoutingModule } from './clients-add-routing.module';

import { ClientsAddPage } from './clients-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsAddPageRoutingModule
  ],
  declarations: [ClientsAddPage]
})
export class ClientsAddPageModule {}
