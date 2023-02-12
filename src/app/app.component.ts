import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ECommerceWeb';
  item_arr = [
    {
      id: '784fc7e2-7dfc-4bd1-8d39-63880944e3d9',
      title: 'Linkgo 3D Cancer',
      Image: './assets/picture/cancer.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: 'fb34b602-bcb7-42a3-b42b-1881bf30c55a',
      title: 'Linkgo 3D Taurus',
      Image: './assets/picture/Taurus.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '42df695b-b58e-464f-a4c5-7202f157884b',
      title: 'Linkgo 3D Gemini',
      Image: './assets/picture/Gemini.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '735ce819-df92-455b-89e8-864f8f770fdc',
      title: 'Linkgo 3D Leo',
      Image: './assets/picture/Leo.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '1021df3f-89fc-4309-91ba-1fb33a7fc4fa',
      title: 'Linkgo 3D Libra',
      Image: './assets/picture/Libra.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Hết hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '30eeedf5-3ac8-4a3d-a489-ad5812d685c5',
      title: 'Linkgo 3D Virgo',
      Image: './assets/picture/Virgo.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: 'df3e89a0-28cd-4d66-8298-e43ed064d36a',
      title: 'Linkgo 3D Scorpius',
      Image: './assets/picture/Scorpius.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '28d9c5a5-709e-4409-ae30-7e2a17282b6f',
      title: 'Linkgo 3D Devil',
      Image: './assets/picture/Devil.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Hết hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '69e4b867-c8eb-451f-9a85-db5e53b15fe1',
      title: 'Linkgo 3D Angle',
      Image: './assets/picture/Angle.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
    {
      id: '4600b795-2345-4af4-bcd2-7c7373e419cb',
      title: 'Linkgo 3D Pisces',
      Image: './assets/picture/Pisces.jpg',
      discription: 'Chất liệu: Nhựa ABS, ...',
      status: 'Còn hàng',
      price: '55.000 ~ 99.000 VNĐ',
    },
  ];
  like() {
    console.log('LIKED');
  }
}
