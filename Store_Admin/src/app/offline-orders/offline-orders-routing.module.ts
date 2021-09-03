import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineOrdersPage } from './offline-orders.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineOrdersPageRoutingModule {}
