import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-city-guide-eat',
  templateUrl: './city-guide-eat.component.html',
  styleUrls: ['./city-guide-eat.component.css']
})
export class CityGuideEatComponent implements OnInit {
  list : any[] = [];
  guideOptId: any;
  choosedOpt: any="";

  constructor(private _router: Router, private auth_serv: AuthService) {
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
  goBack(){
    this._router.navigate(['/cityGuide']).then();
  }
  chooseStayOption(value:any){
      this.choosedOpt=value;
  }

goBackStayOption(){
  this.choosedOpt="";
}
}
