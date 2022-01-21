import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-city-guide-arrive',
  templateUrl: './city-guide-arrive.component.html',
  styleUrls: ['./city-guide-arrive.component.css']
})
export class CityGuideArriveComponent implements OnInit {
  list : any[] = [];
  cityId: any;
  guideOptId: any;
  choosedOpt: any="";
  constructor(private _router: Router, private auth_serv: AuthService) { 
    this.guideOptId=history.state.data;
    this.cityId=history.state.cityId;

  }
  

  ngOnInit(): void {
    this.guideOptId = localStorage.getItem("guideOptId");
    this.auth_serv.getGuideBookSectionContent(this.guideOptId).subscribe(
      {
        next: (res:any)=>{
          for(var val of res.records){
            this.list.push(val);
          }
          console.log(this.list);
        },
        error:(err:any)=>{
          console.log(err);
        }
      }
    )
  }

  chooseArriveOption(value: any){
      this.choosedOpt=value;
  }


  goBack(){
    console.log(this.guideOptId)
    this._router.navigate(['/cityGuide']).then();
  }

  goBackArriveOption(){
    this.choosedOpt="";
  }

}
