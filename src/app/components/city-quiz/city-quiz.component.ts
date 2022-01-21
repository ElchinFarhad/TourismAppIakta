import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-quiz',
  templateUrl: './city-quiz.component.html',
  styleUrls: ['./city-quiz.component.css']
})
export class CityQuizComponent implements OnInit {


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this._router.navigateByUrl('/cityMainPage').then();
  }

}
