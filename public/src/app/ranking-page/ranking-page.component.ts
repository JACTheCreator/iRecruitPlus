import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
  candidates;

  constructor(public httpClient: HttpClient) { }



  ngOnInit() {
	  	this.httpClient.get<any>("localhost:5000/api/v1/candidates").subscribe((data) => {
	  		this.candidates = data;
	  		console.log(data);
	  	})
	}
}
