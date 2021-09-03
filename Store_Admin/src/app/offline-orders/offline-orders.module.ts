import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflineOrdersPageRoutingModule } from './offline-orders-routing.module';

import { OfflineOrdersPage } from './offline-orders.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddOfflineComponent } from './add-offline/add-offline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    OfflineOrdersPageRoutingModule
  ],
  declarations: [OfflineOrdersPage,AddOfflineComponent],
  entryComponents:[AddOfflineComponent]
})
export class OfflineOrdersPageModule {}
