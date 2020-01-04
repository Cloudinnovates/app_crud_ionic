import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesViewPage } from './categories-view.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesViewPageRoutingModule {}
