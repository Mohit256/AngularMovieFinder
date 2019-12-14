import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../MovieDetails';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterStateSnapshot, ActivatedRoute, ParamMap } from '@angular/router';
import { ErrorServiceService } from '../error-service.service';

@Component({
  selector: 'app-movie-detals-component',
  templateUrl: './movie-detals-component.component.html',
  styleUrls: ['./movie-detals-component.component.css']
})
export class MovieDetalsComponentComponent implements OnInit {
  movieId: String;   
  details: MovieDetails;

  constructor( private http: HttpClient, private route: ActivatedRoute, private errorService: ErrorServiceService) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe((params: ParamMap) => { this.movieId = params.get('movieId')});

    this.http.get<MovieDetails>('http://www.omdbapi.com/?i='+ this.movieId +'&apikey=a7396726').subscribe((data)=> this.details=data ,
    (error:HttpErrorResponse)=>{
      this.errorService.handleError(error);  
   })
 }

  }
