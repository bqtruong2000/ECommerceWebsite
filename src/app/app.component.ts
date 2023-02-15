import { Component, Input } from '@angular/core';
import { MyServiceService } from './service/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ECommerceWeb';

  constructor(public myservice: MyServiceService) {}

  count = this.myservice.count;

  item_arr = this.myservice.item_arr;

  increase() {
    this.myservice.increase();
  }
}
