import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const people=[
      {id: 1 ,firstName: "John" ,lastName: "Doe",phoneNumber:"1234567" ,email:"John.Doe@person.com",address:" Amman " ,class: "C",material:"C++"}
    ];
    return {people}
  }

  constructor() { }
}
