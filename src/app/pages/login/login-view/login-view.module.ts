import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginViewPageRoutingModule } from './login-view-routing.module';

import { LoginViewPage } from './login-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginViewPageRoutingModule
  ],
  declarations: [LoginViewPage]
})
export class LoginViewPageModule {}
