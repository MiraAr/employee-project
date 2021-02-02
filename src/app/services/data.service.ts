import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../person';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private httpClient: HttpClient) {}

  getDataList(query:string): Observable<Person[]> {
    console.log(this.baseUrl + query)
    return this.httpClient.get<Person[]>(this.baseUrl + query);
  }

  createPersonData(person: Person, query:string): Observable<Object>{
    return this.httpClient.post<Person[]>(this.baseUrl + query,person)
  }

  deletePersonData(id: number,query:string): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl+ query}/${id}`)
  }



}