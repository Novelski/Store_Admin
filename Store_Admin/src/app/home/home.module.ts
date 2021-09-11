import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,NgxDatatableModule
  ],
  declarations: [HomePage],
  entryComponents:[]
})
export class HomePageModule {}
