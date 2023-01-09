import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  heroes: Heroe[] = [];

  heroeSelected: Heroe | undefined;

  constructor(private heroeService: HeroesService) {}

  searching() {
    this.heroeService
      .getSuggestion(this.query.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }
  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSelected = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.query = heroe.superhero;
    this.heroeService
      .getHeroeById(heroe.id!)
      .subscribe((heroe) => (this.heroeSelected = heroe));
  }
}
