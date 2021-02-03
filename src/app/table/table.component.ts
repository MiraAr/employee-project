import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import {
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  data : Person[];
  currentRoute:string = this.route.routeConfig.path;  
  trashIcon =   faTrashAlt; 
  constructor(private dataService: DataService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService
      .getDataList(this.currentRoute)
      .subscribe((data) => (this.data = data));
  }

  deletePerson(id:number){
    this.dataService.deletePersonData(id,this.currentRoute).subscribe( data => {
      console.log(data);
      this.getData();
    } )
  }

  
  ngDoCheck(){
    console.log(typeof this.currentRoute)
  }

}
