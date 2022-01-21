import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-city-main-page',
  templateUrl: './city-main-page.component.html',
  styleUrls: ['./city-main-page.component.css']
})
export class CityMainPageComponent implements OnInit {

  // cityId: any;

  constructor(private _router: Router, private auth_serv: AuthService) { }

  ngOnInit(): void {
    // this.cityId=history.state.cityId
    // console.log(this.cityId+" Main ID")
  }
  
  checkCity(){
    this._router.navigate(['/cityGuide']).then();
  }
  checkGallery(){
    this._router.navigateByUrl('/cityGallery').then();
  }
  checkQuiz(){
    this._router.navigateByUrl('/cityQuiz').then();
  }
  goBack(){
    this._router.navigate(['/home-page']).then();

    // this._router.navigateByUrl('/home-page').then();
  }
  

}
