import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDemoPage } from './edit-demo.page';

const routes: Routes = [
  {
    path: '',
    component: EditDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDemoPageRoutingModule {}
