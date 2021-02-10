import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentRoute:string= this.route.routeConfig.path;  
  data:Person[];
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
    .subscribe((data) => { this.data = data });
  }

  public AddPerson(personData){
    this.dataService.createPersonData(personData, this.currentRoute).subscribe(
      data => { console.log(data) },
      error => console.log(error)
    )
  }

  public deletePerson(personId){
    this.dataService.deletePersonData(personId,this.currentRoute).subscribe( data => {
      this.getData();
    } )
  }

}
