import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  //i18nSelect
  name: string = 'Harry';
  genre: string = 'male';

  invMap = {
    male: 'invitarlo',
    fem: 'invitarla',
  };

  //i18nPlural
  clients: string[] = ['Nombre', 'Nombre2', 'Nombre3', 'Nombre4', 'Nombre5'];
  clientMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  switchClient() {
    if (this.name === 'Harry') {
      this.name = 'Hermoine';
      this.genre = 'fem';
    } else {
      this.name = 'Harry';
      this.genre = 'male';
    }
  }
  deleteClient() {
    this.clients.pop();
  }

  // KeyValue pipes
  person = {
    name: 'Harry',
    edad: 35,
    address: 'London, England',
  };

  //Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    { name: 'Aquaman', fly: false },
  ];

  //Async pipe
  myObservable = interval(5000)
  promiseValue = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Promise resolve')
    }, 3500)
  })
}
