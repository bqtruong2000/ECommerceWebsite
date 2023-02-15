import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BadgeComponent } from './badge/badge.component';
import { ShareModule } from './share/share-module/share.module';
import { MyServiceService } from './service/my-service.service';
@NgModule({
  declarations: [AppComponent, BadgeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
