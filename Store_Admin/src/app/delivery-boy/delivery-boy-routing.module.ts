import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryBoyPage } from './delivery-boy.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryBoyPage
  },
  {
    path: 'add-details',
    loadChildren: () => import('./add-details/add-details.module').then( m => m.AddDetailsPageModule)
  },
  {
    path: 'edit-details/:id',
    loadChildren: () => import('./edit-details/edit-details.module').then( m => m.EditDetailsPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryBoyPageRoutingModule {}
