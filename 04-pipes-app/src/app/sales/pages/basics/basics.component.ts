import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'subtitulo';
  nameUpper: string = 'SUBTITULO';
  fullName: string = 'SubTitle Title';

  date: Date = new Date();
}
