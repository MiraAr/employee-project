import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;
  LoginSrcImage:string = "/assets/images/logInForm.png";

  constructor(private loginservice: AuthenticationService, private router: Router) {}
  ngOnInit(): void {}

  checkLogin(){
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
    );

  }
}