import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieDetalsComponentComponent } from './MoviesModule/movie-detals-component/movie-detals-component.component';
import { MovieFinderComponentComponent } from './MoviesModule/movie-finder-component/movie-finder-component.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/moviefinder', pathMatch: 'full' },
  { path: 'moviefinder',  component: MovieFinderComponentComponent },
  { path: 'moviedetails', component: MovieDetalsComponentComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
