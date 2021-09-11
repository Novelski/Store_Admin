import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEditPageRoutingModule } from './home-edit-routing.module';

import { HomeEditPage } from './home-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEditPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [HomeEditPage]
})
export class HomeEditPageModule {}
