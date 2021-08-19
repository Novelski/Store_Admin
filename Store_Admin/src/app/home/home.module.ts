import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { HomeEditComponent } from './home-edit/home-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,NgxDatatableModule
  ],
  declarations: [HomePage,HomeModalComponent,HomeEditComponent],
  entryComponents:[HomeModalComponent,HomeEditComponent]
})
export class HomePageModule {}
