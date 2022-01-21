import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  errorMsg: string="none";
  errorShow: string="none";
  errorColor: string="";


  constructor( private auth_serv: AuthService, private socialAuthService: SocialAuthService, private _router: Router) {}

  ngOnInit() {
  }

  loginWithGoogle(): void {

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.auth_serv.googleAuthGuardCheck();
      localStorage.setItem('google_auth', JSON.stringify(data));
     this._router.navigateByUrl('/home-page').then();
    });
  }

  login(){
    let loginUserData = {
     username: this.username,
     password: this.password
   }
   this.auth_serv.loginUser(loginUserData).subscribe(
    {
      next: (res:any)=>{
        this._router.navigateByUrl('/home-page').then();
      },
      error:(err:any)=>{
        console.log(err);
      }
    }
  )
}

  signUp(): void {
    this._router.navigateByUrl('/register').then();
  }

}




