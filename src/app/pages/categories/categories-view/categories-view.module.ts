import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesViewPageRoutingModule } from './categories-view-routing.module';

import { CategoriesViewPage } from './categories-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesViewPageRoutingModule
  ],
  declarations: [CategoriesViewPage]
})
export class CategoriesViewPageModule {}
