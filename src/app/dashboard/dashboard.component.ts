import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  public dashboardInfo= {
    fullName: "test test",
    email: "root@root.com",
    phoneNumber: "9518476332",
    address: "Amman"
  }
  ngOnInit(): void {}
 
}
