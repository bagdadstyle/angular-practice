import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
})
export class AddCharComponent {
  @Input() characters: Character[] = [];

  @Input() newChar: Character = {
    name: '',
    power: 0,
  };

  add(): void {
    if (this.newChar.name.trim().length == 0) return;
    this.characters.push(this.newChar);
    this.newChar = {
      name: '',
      power: 0,
    };
  }
}
