import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './template/basics'
    },
    {
      text: 'Dinamics',
      route: './template/dinamics'
    },
    {
      text: 'Switchs',
      route: './template/switchs'
    }
  ]
  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './reactive/basics'
    },
    {
      text: 'Dinamics',
      route: './reactive/dinamics'
    },
    {
      text: 'Switchs',
      route: './reactive/switchs'
    }
  ]
}
