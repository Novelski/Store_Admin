import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDemoPageRoutingModule } from './add-demo-routing.module';

import { AddDemoPage } from './add-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDemoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddDemoPage]
})
export class AddDemoPageModule {}
