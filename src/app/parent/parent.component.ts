import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() {
  }
  public isViewable: boolean;
  ngOnInit(): void {
    this.isViewable = false;
  }
  public toggleAddForm(): void {
    this.isViewable = !this.isViewable;
  }
}
