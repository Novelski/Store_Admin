import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.prod';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from './guard/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule,
 ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }
    //,{
  //  provide: HTTP_INTERCEPTORS,
   // useClass: AuthInterceptor,
  //  multi: true,
 // }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
