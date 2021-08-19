import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderMgmtPage } from './order-mgmt.page';

const routes: Routes = [
  {
    path: '',
    component: OrderMgmtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderMgmtPageRoutingModule {}
