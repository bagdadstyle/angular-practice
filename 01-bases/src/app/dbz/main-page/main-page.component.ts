import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Gokú',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  newChar: Character = {
    name: '',
    power: 0,
  };
  

  
  // deleteChar(): void {
  //   this.characters.pop();
  // }
}
