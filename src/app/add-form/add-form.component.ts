import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Person } from '../person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  person: Person = new Person();
  currentRoute:string = this.route.routeConfig.path;

  mySubscription: any;
  constructor(
    private dataService: DataService ,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  saveNewPerson(){
    this.dataService.createPersonData(this.person, this.currentRoute).subscribe(
      data => { console.log(data) },
      error => console.log(error)
    )
  }

  formSubmit() {
    this.saveNewPerson()
    location.reload() 
  }

  cancelSubmission(){

  }
}
