import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userName = 'mira';
  password = '12345';
  invalidLogin = false;

  constructor(private loginservice: AuthenticationService, private router: Router) {}
  ngOnInit(): void {}

  checkLogin(){
    if (this.loginservice.authenticate(this.userName, this.password)
    ) {
      this.invalidLogin = false
      this.router.navigate(['/dashboard'])
    } else{
      this.invalidLogin = true
    }

  }
}
