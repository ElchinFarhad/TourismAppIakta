import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: string="0%";


  constructor(
    public translate: TranslateService, private _router: Router, private auth_serv: AuthService
  ) {
    translate.addLangs(['en', 'it']);
    translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {

  }

  logOut(): void {
    localStorage.clear();
    localStorage.removeItem('google_auth');
    this._router.navigateByUrl('/login').then();
  }

   openNav() {
    this.header = "100%";
  }

   closeNav() {
    this.header= "0%";
  }

  switchMainPage(){
    this._router.navigateByUrl('/home-page').then();
  }



}
