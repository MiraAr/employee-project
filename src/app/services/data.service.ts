import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  private baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private httpClient: HttpClient) {}


  getDataList(query:string): Observable<Person[]> {
    
    let username = 'mira';
    let password = '12345';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Person[]>(this.baseUrl + query , {headers});
  }

  createPersonData(person: Person, query:string): Observable<Object>{
    let username = 'mira';
    let password = '12345';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Person[]>(this.baseUrl + query ,person , {headers})
  }

  deletePersonData(id: number,query:string): Observable<Object>{
    let username = 'mira';
    let password = '12345';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete(`${this.baseUrl+ query}/${id}`,{headers})
  }
}