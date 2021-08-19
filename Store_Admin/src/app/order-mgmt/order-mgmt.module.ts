import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { OrderMgmtPageRoutingModule } from './order-mgmt-routing.module';

import { OrderMgmtPage } from './order-mgmt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderMgmtPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [OrderMgmtPage]
})
export class OrderMgmtPageModule {}
