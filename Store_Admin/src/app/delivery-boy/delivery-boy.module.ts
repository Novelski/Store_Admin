import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { DeliveryBoyPageRoutingModule } from './delivery-boy-routing.module';

import { DeliveryBoyPage } from './delivery-boy.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryBoyPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [DeliveryBoyPage],
  entryComponents: []
})
export class DeliveryBoyPageModule {}
