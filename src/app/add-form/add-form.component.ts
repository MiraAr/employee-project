import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  AdminSrcImage:string = "/assets/images/adminAddForm.png";
  ParentSrcImage:string = "/assets/images/parentsAddForm.png";
  TeacherSrcImage:string = "/assets/images/teacherAddForm.png";
  @Output() addNewPersonEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

  }

  formSubmit(personData) {
    this.addNewPersonEvent.emit(personData)
    location.reload() 
  }

  cancelSubmission(){
    event.preventDefault();
    location.reload()
  }

}