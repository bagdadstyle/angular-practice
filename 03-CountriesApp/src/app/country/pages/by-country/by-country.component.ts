import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  query: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.error = false;
    this.query = query;

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
    
  }
}
