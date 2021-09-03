import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderItemsPageRoutingModule } from './order-items-routing.module';

import { OrderItemsPage } from './order-items.page';
import { OrderModalComponent } from './order-modal/order-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderItemsPageRoutingModule
  ],
  declarations: [OrderItemsPage,OrderModalComponent],
  entryComponents:[OrderModalComponent]
})
export class OrderItemsPageModule {}
