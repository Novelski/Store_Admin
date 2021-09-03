import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOrdersPageRoutingModule } from './new-orders-routing.module';

import { NewOrdersPage } from './new-orders.page';
import { ViewOrderComponent } from './view-order/view-order.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOrdersPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [NewOrdersPage,ViewOrderComponent],
  entryComponents:[ViewOrderComponent]
})
export class NewOrdersPageModule {}
