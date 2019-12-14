import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MovieDetails } from '../MovieDetails';
import { ErrorServiceService } from '../error-service.service';
import { Movies } from '../Movies';

@Component({
  selector: 'app-movie-finder-component',
  templateUrl: './movie-finder-component.component.html',
  styleUrls: ['./movie-finder-component.component.css']
})
export class MovieFinderComponentComponent implements OnInit {
  @ViewChild('f',{static:false}) form: any; 
  error: string;
  movies : Movies =  new Movies();
  
  
  constructor(private http : HttpClient, private errorService: ErrorServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.get<Movies>('http://www.omdbapi.com/?s='+ this.form.value.moviename +'&apikey=a7396726').subscribe((data)=> { this.movies.Search=data.Search;   },
       (error:HttpErrorResponse)=>{
        this.errorService.handleError(error); 
      })
    }

  }

}
