import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './heroes/pages/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
