import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { Subject } from 'rxjs';
import { takeUntil, map} from 'rxjs/operators';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  currentRoute:string= this.route.routeConfig.path;  
  data:Person[];
  public isViewable: boolean;
  private _destroyed$ = new Subject();
  constructor( private route: ActivatedRoute, private dataService:DataService ) {}

  ngOnInit(): void {
    this.isViewable = false;
    this.dataService.getDataList(this.currentRoute).pipe(
      map(value => value),
      takeUntil(this._destroyed$)
    )
    .subscribe((data) => { this.data = data });
  }

  public toggleAddForm(): void {
    this.isViewable = !this.isViewable;
  }

  public getData(){
    this.dataService.getDataList(this.currentRoute)
    .pipe(
      map(value => value),
      takeUntil(this._destroyed$)
    ).subscribe((data) => { this.data = data });
  }

  public AddPerson(personData){
    this.dataService.createPersonData(personData, this.currentRoute)
    .pipe(
      map(value => value),
      takeUntil(this._destroyed$)
    ).subscribe(
      data => { console.log(data) },
      error => console.log(error)
    )
  }

  public deletePerson(personId){
    this.dataService.deletePersonData(personId,this.currentRoute).pipe(
      map(value => value),
      takeUntil(this._destroyed$)
    ).subscribe( data => {
      this.getData();
    } )
  }

  public closeForm(){
    this.isViewable = false;
  }

  // unsubsccribe on destroy to avoid unwanted memory leaks
  public ngOnDestroy (): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

}
