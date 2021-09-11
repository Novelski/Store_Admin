import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineOrdersPage } from './offline-orders.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineOrdersPage
  },
  {
    path: 'add-orders',
    loadChildren: () => import('./add-orders/add-orders.module').then( m => m.AddOrdersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineOrdersPageRoutingModule {}
