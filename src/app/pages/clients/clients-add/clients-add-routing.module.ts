import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsAddPage } from './clients-add.page';

const routes: Routes = [
  {
    path: '',
    component: ClientsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsAddPageRoutingModule {}
