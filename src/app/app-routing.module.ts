import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-view',
    pathMatch: 'full'
  },
  {
    path: 'home-view',
    loadChildren: () => import('./pages/home/home-view/home-view.module').then( m => m.HomeViewPageModule)
  },
  {
    path: 'clients-add',
    loadChildren: () => import('./pages/clients/clients-add/clients-add.module').then( m => m.ClientsAddPageModule)
  },
  {
    path: 'clients-list',
    loadChildren: () => import('./pages/clients/clients-list/clients-list.module').then( m => m.ClientsListPageModule)
  },
  {
    path: 'clients-view',
    loadChildren: () => import('./pages/clients/clients-view/clients-view.module').then( m => m.ClientsViewPageModule)
  },
  {
    path: 'categories-add',
    loadChildren: () => import('./pages/categories/categories-add/categories-add.module').then( m => m.CategoriesAddPageModule)
  },
  {
    path: 'categories-list',
    loadChildren: () => import('./pages/categories/categories-list/categories-list.module').then( m => m.CategoriesListPageModule)
  },
  {
    path: 'categories-view',
    loadChildren: () => import('./pages/categories/categories-view/categories-view.module').then( m => m.CategoriesViewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
