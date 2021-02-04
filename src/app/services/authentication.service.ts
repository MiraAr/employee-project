import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(userName, password): boolean{
    if(userName === 'mira' && password === '12345'){
      sessionStorage.setItem('userName',userName)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('userName')
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('userName')
  }

}
