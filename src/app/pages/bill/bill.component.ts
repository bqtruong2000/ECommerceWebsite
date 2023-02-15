import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  constructor(public myservice: MyServiceService) {}

  count = this.myservice.count;

  item_arr = this.myservice.item_arr;

  increase() {
    this.myservice.increase();
  }
}
