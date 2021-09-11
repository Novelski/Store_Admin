import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAddPageRoutingModule } from './home-add-routing.module';

import { HomeAddPage } from './home-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeAddPage]
})
export class HomeAddPageModule {}
