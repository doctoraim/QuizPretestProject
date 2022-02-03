import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-hello-q2',
  templateUrl: './hello-q2.component.html',
  styleUrls: ['./hello-q2.component.css']
})
export class HelloQ2Component implements OnInit {
  displayedColumns: string[] = ['position'];
  dataSource: any = [];
  filtered_data:any =[];
  test;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<any>('https://api.publicapis.org/categories').subscribe(data => {
      this.dataSource = data.categories;
  });
    this.filtered_data = this.dataSource;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filtered_data = this.dataSource.filter(element => {
      return element.includes(filterValue) || !filterValue;
    });
  
}
}
