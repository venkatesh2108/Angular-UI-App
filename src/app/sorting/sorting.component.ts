import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  name: any ;
  
  constructor( private http: HttpClient) {  }
  
  ngOnInit(): void {
  }
  
   

  sortCards(item:string) {
     
          
     this.http.get('https://sortingcards.azurewebsites.net/api/Sorting?cards='+item,{responseType: 'text'}).subscribe(Response=>{
       this.name= Response
     });
   
          
  };
  
}
