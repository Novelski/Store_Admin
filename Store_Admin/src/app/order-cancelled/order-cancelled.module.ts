import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { OrderCancelledPageRoutingModule } from './order-cancelled-routing.module';

import { OrderCancelledPage } from './order-cancelled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCancelledPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [OrderCancelledPage]
})
export class OrderCancelledPageModule {}
