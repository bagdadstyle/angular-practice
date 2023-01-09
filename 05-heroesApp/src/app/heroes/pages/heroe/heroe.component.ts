import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        max-width: 100%;
        max-height: auto;
        border-radius: 5px;
        object-fit: contain;
      }
      .container {
        display: grid;
        gap: 15px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          'header content'
          'title content';
      }
      .header {
        grid-area: header; /* se coloca en la área "header" */
        grid-row-start: 1;
      }
      .publisher {
        grid-area: publisher;
        grid-row-end: 1;
      }
      .content {
        grid-area: content;
        /* grid-row-start: 1 */
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroeById(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }
  goback() {
    this.router.navigate(['/heroes/list']);
  }
}
