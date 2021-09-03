import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackDailySalesPage } from './track-daily-sales.page';

const routes: Routes = [
  {
    path: '',
    component: TrackDailySalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackDailySalesPageRoutingModule {}
