import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  query: string = '';
  error: boolean = false;
  countries: Country[] = [];
  

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.error = false;
    this.query = query;

    this.countryService.searchByCapital(query).subscribe(
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
