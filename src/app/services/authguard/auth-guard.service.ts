import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  routeURL: string;

  constructor(private authService: AuthService, private router: Router) {
    this.routeURL = this.router.url;
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {


    return new Promise((resolve, reject) => {

     // let isAuthenticated = this.authService.authGuardCheck();
      // let a=JSON.parse(isAuthenticated);
      let isAuthenticated=localStorage.getItem("authGuardCheck");
        if (this.routeURL !== '/login' && isAuthenticated!=="true") {
          this.routeURL = '/login';
          this.router.navigate(['/login'], {
            queryParams: {
              return: 'login'
            }
          });
          return resolve(false);
        } 
        else {
          this.routeURL = this.router.url;
          return resolve(true);
        }
      });
  }
}