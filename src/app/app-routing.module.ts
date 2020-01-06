import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-view',
    pathMatch: 'full'
  },
  {
    path: 'home-view', //DEFAULT PAGE 
    loadChildren: () => import('./pages/home/home-view/home-view.module').then( m => m.HomeViewPageModule)
  },
  {
    path: 'clients-add', //ADD PAGE 
    loadChildren: () => import('./pages/clients/clients-add/clients-add.module').then( m => m.ClientsAddPageModule)
  },
  {
    path: 'clients-add/:id/:name/:phone/:email/:updated_at', //EDIT PAGE 
    loadChildren: () => import('./pages/clients/clients-add/clients-add.module').then( m => m.ClientsAddPageModule)
  },  
  {
    path: 'clients-list', //LIST PAGE 
    loadChildren: () => import('./pages/clients/clients-list/clients-list.module').then( m => m.ClientsListPageModule)
  },
  {
    path: 'clients-details', //DETAILS PAGE 
    loadChildren: () => import('./pages/clients/clients-details/clients-details.module').then( m => m.ClientsDetailsPageModule)
  },  
  {
    path: 'clients-details/:id/:name/:phone/:email/:created_at/:updated_at', //DETAILS PAGE 
    loadChildren: () => import('./pages/clients/clients-details/clients-details.module').then( m => m.ClientsDetailsPageModule)
  },  
  {
    path: 'login-view', //LOGIN PAGE 
    loadChildren: () => import('./pages/login/login-view/login-view.module').then( m => m.LoginViewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
