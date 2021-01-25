import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, faTachometerAlt,faUserCog, faUserGraduate,faChalkboardTeacher,faUsers } from '@fortawesome/free-solid-svg-icons';


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
  constructor() {}

  ngOnInit(): void {}
}
