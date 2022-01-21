import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMsg: string="none";
  errorShow: string="none";
  errorColor: string="";
  

  username!: string;
  password!: string;
  infoMessage!: string;
  constructor(private _router: Router, private auth_serv: AuthService) { }

  ngOnInit(): void {
  }


  register(){
    let registerUserData = {
      username: this.username,
      password: this.password
    }

    this.auth_serv.registerUser(registerUserData).pipe(first()).subscribe({
      next:(res: any) => { 
        console.log(JSON.stringify(res));
                this.errorShow="block";
                this.errorColor="#228B22";
                this.errorMsg="Registration Successful! Please Login!";
               // this._router.navigate(['login']);
         },
         error: (err:any)=> { 
        //   let errorMessage = err.error.message.replaceAll('"', '');
          this.errorShow="block", this.errorColor="#c01d21", this.errorMsg=JSON.stringify("Error!: "+err.error.message);
        }
        }
    )

  }


  logIn(){
    this._router.navigateByUrl('/login').then();

  }

}
