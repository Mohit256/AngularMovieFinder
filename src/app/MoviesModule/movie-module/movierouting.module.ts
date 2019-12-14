
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieFinderComponentComponent } from '../movie-finder-component/movie-finder-component.component';
import { MovieDetalsComponentComponent } from '../movie-detals-component/movie-detals-component.component';
import { ActivateGuard } from '../ActivateGuard.service';

const secondaryRoutes: Routes = [
  { path: 'moviefinder',  component: MovieFinderComponentComponent },
  { path: 'moviedetails', component: MovieDetalsComponentComponent, canActivate:[ActivateGuard] }
];


@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }