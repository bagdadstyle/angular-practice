import { Component, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
})
export class AddCharComponent {
  @Input() newChar: Character = {
    name: '',
    power: 0,
  };

  // @Output() onNewChar: EventEmitter<Character> = new EventEmitter();
  constructor(private dbzService: DbzService) {}

  add(): void {
    if (this.newChar.name.trim().length == 0) return;
    // this.onNewChar.emit(this.newChar);
    this.dbzService.addCharacter(this.newChar);
    this.newChar = {
      name: '',
      power: 0,
    };
  }
}
