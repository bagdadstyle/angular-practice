import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acc(base)">+{{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="acc(-base)">-{{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
  public base: number = 5;

  acc(op: number): void {
    this.counter += op;
  }
}
