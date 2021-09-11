import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDemoPage } from './add-demo.page';

const routes: Routes = [
  {
    path: '',
    component: AddDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDemoPageRoutingModule {}
