import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAddPage } from './home-add.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAddPageRoutingModule {}
