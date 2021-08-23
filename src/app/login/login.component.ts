import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }
  ngOnInit() {
  }

  onSave(data){
    //localStorage.setItem('token','MyToken');
   // this.router.navigate(['/'+data.phnno])

    this.authservice.login(data)
    .subscribe(
      (res: any) => {
        if(res.token == null)
        {
            alert("Invalid user or password")
        }
        else
        {
          console.log("SignIn Done..!!");
          console.log(res);
          localStorage.setItem('token', res.token)
          //const t=jwt_decode(localStorage.getItem('token'));
          this.router.navigate(['/'+ res.type])
        }
      },
      err => console.log(err)
    )
  }

}
