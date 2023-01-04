import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private API_KEY: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.API_KEY}/name/${query}`;
    return this.http.get<Country[]>(url);
  }
  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.API_KEY}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }
  getCountryById(id: string): Observable<Country> {
    const url = `${this.API_KEY}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  searchRegion(id: string): Observable<Country[]> {
    const url = `${this.API_KEY}/region/${id}`;
    return this.http.get<Country[]>(url);
  }
}
