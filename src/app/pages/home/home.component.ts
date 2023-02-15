import { Component, Input } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public myservice: MyServiceService) {}

  count = this.myservice.count;

  item_arr = this.myservice.item_arr;

  increase() {
    this.count++;
  }

  getID(item: any) {
    return this.getID;
  }
}
