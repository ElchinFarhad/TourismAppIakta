import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders ({
    'Content-Type': 'application / json',
    
  }),
};

let authGuardCheck: boolean;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    
  }
  private loginUrl='https://tourismapp.ddns.net/api/api.php/login';
  private registerUrl='https://tourismapp.ddns.net/api/api.php/register';
  private userAuth='https://tourismapp.ddns.net/api/api.php/me';

  private mainPageCities='https://tourismapp.mynoomi.com/api/api.php/records/areas';  
  private guideBookSection='https://tourismapp.ddns.net/api/api.php/records/guidebookSectionSetting?filter=area,eq,';  
  private guideBookSectionContent='https://tourismapp.ddns.net/api/api.php/records/guidebookSectionSettingContent?filter=gbSecSettId,eq,';


  authGuardCheck(){
    console.log(authGuardCheck+" check")
      return authGuardCheck;
  }
  googleAuthGuardCheck(){
    localStorage.setItem("authGuardCheck", "true");
    authGuardCheck=true;
    this.authGuardCheck();
  }

  loginUser(user: any){
    this.http.post<any>(this.loginUrl, user, httpOptions).subscribe(
      {
        next: (res:any)=>{
          authGuardCheck=true;
          // this.authGuardCheck();
          localStorage.setItem("authGuardCheck", authGuardCheck.toString());
        },
        error:(err:any)=>{
          authGuardCheck=false;
          // this.authGuardCheck();
          localStorage.setItem("authGuardCheck", authGuardCheck.toString());

        }
      }
    )
    return this.http.post<any>(this.loginUrl, user, httpOptions);
  }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(this.registerUrl, user)
  }


  getAreas(){
    return this.http.get<any>(this.mainPageCities, httpOptions);
  }

  checkAuthUser(){
    return this.http.get<any>(this.userAuth, httpOptions);
  }

  getGuideBookSection(id: string | undefined){
    return this.http.get<any>(this.guideBookSection+id, httpOptions);
  }

  getGuideBookSectionContent(id: string | undefined){
    return this.http.get<any>(this.guideBookSectionContent+id, httpOptions);
  }
  

}
