import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOrdersPage } from './add-orders.page';

const routes: Routes = [
  {
    path: '',
    component: AddOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOrdersPageRoutingModule {}
