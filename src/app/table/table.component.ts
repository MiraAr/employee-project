import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';
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
  @Input() data : Person[];
  @Output() deletePersonEvent:EventEmitter<any> = new EventEmitter<any>();
  currentRoute:string = this.route.routeConfig.path;  
  trashIcon =   faTrashAlt; 
  
  constructor( private route: ActivatedRoute) {
  }
  
  ngOnInit():void {
  }
  
  deletePerson(id){
    this.deletePersonEvent.emit(id)
  }

  trackByFn(index, item){
    return item.id;
  }

}
