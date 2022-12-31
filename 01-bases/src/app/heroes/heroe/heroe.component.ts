import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getName(): string {
    return `${this.name} ${this.age}`;
  }
  setName(): void {
    this.name = '';
  }
  setAge(): void {
    this.age = 30;
  }
}
