import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDemoPageRoutingModule } from './edit-demo-routing.module';

import { EditDemoPage } from './edit-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDemoPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [EditDemoPage]
})
export class EditDemoPageModule {}
