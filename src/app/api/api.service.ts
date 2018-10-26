import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../course';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   apiURL: string = 'https://randomuser.me/api/?results=100';
   // apiURL: string = 'http://localhost:3000/courses';
  toReturn:string;
  constructor(private http: HttpClient) { }


  getInfo(showData){
  	console.log(this.apiURL+" is what is being called");
  	return this.http.get(this.apiURL);
  	

  
  }
}
