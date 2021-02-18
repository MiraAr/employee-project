import { Component, OnInit } from '@angular/core';
import {
  faSignOutAlt,
  faTachometerAlt,
  faUserCog,
  faUserGraduate,
  faChalkboardTeacher,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from "../services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  dashboradIcon = faTachometerAlt;
  parentIcon = faUsers;
  teacherIcon = faChalkboardTeacher;
  studentIcon = faUserGraduate;
  adminIcon = faUserCog;
  logOutIcon = faSignOutAlt;
  showSideNav = false;
  constructor( private loginservice: AuthenticationService, private router: Router) {}

  ngOnInit(): void {  
  }

  logOut(){
    this.loginservice.logOut()
    sessionStorage.clear()
    this.router.navigate(['log-in']);  
  }
  
  toggleDisplaySideNav(){
    this.showSideNav= !this.showSideNav;
  }

}
