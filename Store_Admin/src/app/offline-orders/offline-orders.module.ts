import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineOrdersPageRoutingModule } from './offline-orders-routing.module';

import { OfflineOrdersPage } from './offline-orders.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    
    OfflineOrdersPageRoutingModule
  ],
  declarations: [OfflineOrdersPage,],
  entryComponents:[]
})
export class OfflineOrdersPageModule {}
