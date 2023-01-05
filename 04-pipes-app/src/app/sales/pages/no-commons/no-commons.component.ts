import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  //i18nSelect
  name: string = 'Usuario';
  genre: string = 'fem';

  invMap = {
    male: 'invitarlo',
    fem: 'invitarla',
  };

  //i18nPlural
  clients: string[] = ['Nombre', 'Nombre2', 'Nombre3'];
  clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  };
}
