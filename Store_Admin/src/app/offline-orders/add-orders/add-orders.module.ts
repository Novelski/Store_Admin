import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrdersPageRoutingModule } from './add-orders-routing.module';

import { AddOrdersPage } from './add-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrdersPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [AddOrdersPage]
})
export class AddOrdersPageModule {}
