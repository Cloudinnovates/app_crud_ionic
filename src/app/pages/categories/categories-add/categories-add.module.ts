import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesAddPageRoutingModule } from './categories-add-routing.module';

import { CategoriesAddPage } from './categories-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesAddPageRoutingModule
  ],
  declarations: [CategoriesAddPage]
})
export class CategoriesAddPageModule {}
