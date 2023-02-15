import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ShareModule } from 'src/app/share/share-module/share.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, ShareModule],
})
export class CartModule {}
