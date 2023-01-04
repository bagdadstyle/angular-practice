import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  // regions: string[] = [
  //   'EU',
  //   'EFTA',
  //   'CARICOM',
  //   'PA',
  //   'AU',
  //   'USAN',
  //   'EEU',
  //   'AL',
  //   'ASEAN',
  //   'CAIS',
  //   'CEFTA',
  //   'NAFTA',
  //   'SAARC',
  // ];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activeRegion(region: string) {
    if (region === this.regionActive) return;
    this.regionActive = region;
    this.countries = [];
    this.countryService
      .searchRegion(region)
      .subscribe((resp) => (this.countries = resp));
  }
  getClass(region: string) {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
