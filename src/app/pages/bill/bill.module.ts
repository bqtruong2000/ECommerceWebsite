import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { ShareModule } from 'src/app/share/share-module/share.module';

@NgModule({
  declarations: [BillComponent],
  imports: [CommonModule, BillRoutingModule, ShareModule],
})
export class BillModule {}
