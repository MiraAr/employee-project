import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { DataService } from '../services/data.service';
import { Subject } from 'rxjs';
import { takeUntil, map} from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentRoute:string= this.route.routeConfig.path;  
  data:Person[];
  private _destroyed$ = new Subject();
  constructor(private route: ActivatedRoute, private dataService:DataService) {
  }
  public isViewable: boolean;

  ngOnInit(): void {
    this.isViewable = false;
    this.getData();
  }

  public toggleAddForm(): void {
    this.isViewable = !this.isViewable;
  }

  public getData(){
    this.dataService.getDataList(this.currentRoute)
    .pipe(
      map(value => value),
      takeUntil(this._destroyed$)
    )
    .subscribe((data) => { this.data = data });
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
    this.dataService.deletePersonData(personId,this.currentRoute)
    .pipe(
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
