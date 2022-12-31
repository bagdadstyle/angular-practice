import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deleteH: string = '';

  deleteHeroe(): void {
    this.deleteH = this.heroes.shift() || '';
  }
}
