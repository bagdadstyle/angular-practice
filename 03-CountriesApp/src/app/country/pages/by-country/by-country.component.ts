import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  query: string = '';
  error: boolean = false;
  countries: Country[] = [];
  countriesSugestion: Country[] = [];
  showSugestion: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.error = false;
    this.query = query;
    this.showSugestion = false;

    this.countryService.searchByCountry(query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.error = true;
        this.countries = [];
      }
    );
  }
  suggestion(query: string) {
    this.error = false;
    this.query = query;
    this.showSugestion = true;

    this.countryService.searchByCountry(query).subscribe(
      (countries) => (this.countriesSugestion = countries.splice(0, 3)),
      (err) => (this.countriesSugestion = [])
    );
  }
  searchSugestion(query: string) {
    this.search(query);
  }
}
