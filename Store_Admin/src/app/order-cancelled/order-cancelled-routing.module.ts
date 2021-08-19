import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCancelledPage } from './order-cancelled.page';

const routes: Routes = [
  {
    path: '',
    component: OrderCancelledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCancelledPageRoutingModule {}
