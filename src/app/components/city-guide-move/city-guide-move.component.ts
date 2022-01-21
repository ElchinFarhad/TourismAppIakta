import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-city-guide-move',
  templateUrl: './city-guide-move.component.html',
  styleUrls: ['./city-guide-move.component.css']
})
export class CityGuideMoveComponent implements OnInit {
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

chooseMoveOption(value: any){
    this.choosedOpt=value;
}


goBack(){
  this._router.navigate(['/cityGuide']).then();
}

goBackMoveOption(){
  this.choosedOpt="";
}

}
