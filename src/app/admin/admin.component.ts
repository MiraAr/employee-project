import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public isViewable: boolean;
  currentRoute:string= this.route.routeConfig.path;  
  data:Person[];
  constructor( private route:ActivatedRoute, private dataService:DataService) {   
  }

  ngOnInit(): void {
    this.isViewable = false;
    this.dataService.getDataList(this.currentRoute)
    .subscribe((data) => { this.data = data });
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
  }z

}
