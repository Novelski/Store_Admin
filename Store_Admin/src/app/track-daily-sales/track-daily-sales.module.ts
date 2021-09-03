import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackDailySalesPageRoutingModule } from './track-daily-sales-routing.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { TrackDailySalesPage } from './track-daily-sales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    TrackDailySalesPageRoutingModule
  ],
  declarations: [TrackDailySalesPage]
})
export class TrackDailySalesPageModule {}
