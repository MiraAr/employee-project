import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map} from 'rxjs/operators';

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
  private _destroyed$ = new Subject();

  constructor(private loginservice: AuthenticationService, private router: Router) {}
  ngOnInit(): void {}

  checkLogin(){
    (this.loginservice.authenticate(this.username, this.password)
    .pipe(
      map(value => value),
      takeUntil(this._destroyed$))
    .subscribe(
      () => {
        this.router.navigate(['/dashboard'])
        this.invalidLogin = false
      },
      () => {
        this.invalidLogin = true
      }
    )
    );

  }

  // unsubsccribe on destroy to avoid unwanted memory leaks
  public ngOnDestroy (): void {
    this._destroyed$.next();
    this._destroyed$.complete();
}

}