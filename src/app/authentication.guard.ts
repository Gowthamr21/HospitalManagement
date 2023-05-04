import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  service: any;

  constructor(private loginService:LoginserviceService,private router:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this.loginService.isuserLoggedIn()){
        return true;
      }
      else{
        alert("you are not login");
        this.router.navigate(["login"],{queryParams:{retUrl:route.url}});//localhost:4200/login?retUrl=product
        return false;
      }
    }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
