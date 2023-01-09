import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }
  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  getSuggestion(query: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(
      `${this.baseUrl}/heroes/?q=${query}&_limit=6`
    );
  }
  addHero(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }
  updateHero(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }
  deleteHero(heroe: Heroe): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${heroe.id}`);
  }
}
