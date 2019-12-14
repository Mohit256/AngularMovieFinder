import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {
  error: string;

  constructor() { }


  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.error ='An error occurred:'+ error.error.message;
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

        this.error =  `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`;
    }

}

}
