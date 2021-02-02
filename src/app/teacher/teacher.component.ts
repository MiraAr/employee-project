import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public isViewable: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isViewable = false;
  }

  public toggleAddForm(): void {
    this.isViewable = !this.isViewable;
  }

}
