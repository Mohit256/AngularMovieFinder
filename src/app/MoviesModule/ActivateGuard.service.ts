import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ActivateGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

    console.log("OnlyLoggedInUsers");
     console.log(route.queryParamMap.has('movieId'));
     return route.queryParamMap.has('movieId') ? true :false;
  }
}