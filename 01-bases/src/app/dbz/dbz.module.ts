import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddCharComponent } from './add-char/add-char.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, AddCharComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [
    DbzService
  ]
})
export class DbzModule {}
