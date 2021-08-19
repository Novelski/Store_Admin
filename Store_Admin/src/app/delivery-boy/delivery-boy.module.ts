import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { DeliveryBoyPageRoutingModule } from './delivery-boy-routing.module';

import { DeliveryBoyPage } from './delivery-boy.page';
import { EditDeliveryBoyComponent } from './edit-delivery-boy/edit-delivery-boy.component';
import { AddDeliveryBoyComponent } from './add-delivery-boy/add-delivery-boy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryBoyPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [DeliveryBoyPage,EditDeliveryBoyComponent,AddDeliveryBoyComponent],
  entryComponents: [EditDeliveryBoyComponent,AddDeliveryBoyComponent]
})
export class DeliveryBoyPageModule {}
