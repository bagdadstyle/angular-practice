import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics',
    },
  ];
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_image: '',
  };
  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroeById(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  save() {
    if (this.heroe.superhero.trim().length === 0) return;
    
    if(this.heroe.id){
      // Update
      this.heroeService.updateHero(this.heroe)
      .subscribe(heroe => this.showSnack('Updated'))
    }
    else{  
      this.heroeService.addHero(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/edit', heroe.id])
        this.showSnack('Created')
      });
    }
  }
  delete(){
    this.heroeService.deleteHero(this.heroe)
    .subscribe((resp) =>{
      this.router.navigate(['/heroes'])
    })
  }
  showSnack(message: string): void{
    this.snackBar.open(message, 'Ok!', {
      duration: 2500
    })
  }
}
