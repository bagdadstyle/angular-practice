import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private APIKEY: string = 'SBQ26k1t1aTvRUFXpuzL3JdN89othxJR';
  private _history: string[] = [];
  private urlService = 'https://api.giphy.com/v1/gifs';

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('gifs')!) || [];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }
    const params = new HttpParams()
      .set('api_key', this.APIKEY)
      .set('limit', 10)
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.urlService}/search`, { params })
      .subscribe((res) => {
        this.results = res.data;
        localStorage.setItem('gifs', JSON.stringify(this.results));
      });
  }
}
