import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPage } from './demo.page';

const routes: Routes = [
  {
    path: '',
    component: DemoPage
  },
  {
    path: 'add-demo',
    loadChildren: () => import('./add-demo/add-demo.module').then( m => m.AddDemoPageModule)
  },
  {
    path: 'edit-demo/:id',
    loadChildren: () => import('./edit-demo/edit-demo.module').then( m => m.EditDemoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPageRoutingModule {}
