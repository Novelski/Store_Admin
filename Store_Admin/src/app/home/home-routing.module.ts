import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home-edit/:id',
    loadChildren: () => import('./home-edit/home-edit.module').then( m => m.HomeEditPageModule)
  },
  {
    path: 'home-add',
    loadChildren: () => import('./home-add/home-add.module').then( m => m.HomeAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
