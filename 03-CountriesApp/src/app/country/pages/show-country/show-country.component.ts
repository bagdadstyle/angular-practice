import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [],
})
export class ShowCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryById(id)),
        tap(console.log)
      )
      .subscribe((resp) => {
        const obj = Object.assign({}, ...resp);
        console.log(obj);
        this.country = obj;
      });
    // this.activatedRoute.params.subscribe(({id}) => {
    //   console.log(id);
    //     this.countryService.getCountryById(id)
    //     .subscribe(country =>{
    //       console.log(country)
    //     })
    // });
  }
}
