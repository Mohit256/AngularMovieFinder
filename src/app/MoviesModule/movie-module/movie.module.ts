import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorServiceService } from '../error-service.service';
import { MovieDetalsComponentComponent } from '../movie-detals-component/movie-detals-component.component';
import { MovieFinderComponentComponent } from '../movie-finder-component/movie-finder-component.component';

import { ActivateGuard } from '../ActivateGuard.service';
import { MovieRoutingModule } from './movierouting.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MovieDetalsComponentComponent,
    MovieFinderComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule,
    HttpClientModule
  ],
  providers: [ErrorServiceService,,ActivateGuard,HttpClient]
})
export class MovieModule { }
