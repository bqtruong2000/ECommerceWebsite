import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public myservice: MyServiceService) {}

  count = this.myservice.count;

  item_arr = this.myservice.item_arr;

  increase() {
    this.myservice.increase();
  }

  purchase_item = [this.myservice.getID];
}
