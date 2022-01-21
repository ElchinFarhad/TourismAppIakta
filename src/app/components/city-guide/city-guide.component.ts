import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-city-guide',
  templateUrl: './city-guide.component.html',
  styleUrls: ['./city-guide.component.css']
})
export class CityGuideComponent implements OnInit {

  list : any[] = [];
  cityId: any;
  guideOptId: any;

  constructor(private _router: Router, private auth_serv: AuthService) {
  }
  
  ngOnInit(): void {
    this.cityId=history.state.cityId
    this.cityId = localStorage.getItem("cityId");
    console.log(this.list)

    this.auth_serv.getGuideBookSection(this.cityId).subscribe(
      {
        next: (res:any)=>{
          for(var val of res.records){
            this.list.push(val);
          }
        },
        error:(err:any)=>{
          console.log(err);
        }
      }
    )
  }

  checkGuideOption(value: any){
    this.guideOptId=value;
    localStorage.setItem("guideOptId", value);

    if(this.guideOptId===1){
      this._router.navigate(['/cityGuide/arrive']).then();
    }
    else if(this.guideOptId===2){
      this._router.navigate(['/cityGuide/move']).then();
    }
    else if(this.guideOptId===3){
      this._router.navigate(['/cityGuide/stay']).then();
    }
    else if(this.guideOptId===4){
      this._router.navigate(['/cityGuide/eat']).then();
    }
    else if(this.guideOptId===5){

    }
    else if(this.guideOptId===6){

    }
  }

  goBack(){
    this._router.navigate(['/cityMainPage']).then();
  }

}
