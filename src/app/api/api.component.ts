import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import {ApiService} from './api.service'; 
import {Course} from '../course';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  showData: any;
  constructor(private apiService: ApiService) {}

	  ngOnInit() {
	    
	   console.log("Working! This is from the API component");

	   this.apiService.getInfo().subscribe(data=>this.showData=data.results; console.log(this.showData));	
	  }

}
