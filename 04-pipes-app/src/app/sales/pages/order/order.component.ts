import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/sales.interaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  capitalLetter: boolean = false;
  orderBy: string = ''
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase() {
    this.capitalLetter = !this.capitalLetter;
  }
  changeOrder(value: string){
    this.orderBy = value
  }
}
