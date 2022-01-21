import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-gallery',
  templateUrl: './city-gallery.component.html',
  styleUrls: ['./city-gallery.component.css']
})
export class CityGalleryComponent implements OnInit {


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this._router.navigateByUrl('/cityMainPage').then();
  }

}
