import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  header: string="0%";
  images : any[] = [];
  areas: any[]=[];

  constructor(private _router: Router, private auth_serv: AuthService) {
  }

  ngOnInit(): void {

    this.auth_serv.getAreas().subscribe(
      {
        next: (res:any)=>{
          for(var val of res.records){
            this.images.push({path: "https://tourismapp.mynoomi.com/"+val.imgName});
            this.areas.push(val);
          }

        },
        error:(err:any)=>{
          console.log(err);
        }
      }
    )
  }
  start(value: any){
    localStorage.setItem("cityId", value);
    this._router.navigate(['/cityMainPage']).then();
  }
  handleCarouselEvent(a:any){
    console.log(a+" aaaa")

  }

}
