import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginViewPage } from './login-view.page';

const routes: Routes = [
  {
    path: '',
    component: LoginViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginViewPageRoutingModule {}
