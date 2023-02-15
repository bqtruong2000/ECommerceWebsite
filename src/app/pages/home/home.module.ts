import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from 'src/app/share/share-module/share.module';
import { MyServiceService } from 'src/app/service/my-service.service';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule],
})
export class HomeModule {}
