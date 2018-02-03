import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Task } from './task';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit, AfterViewInit {
  displayedColumns = ['Title', 'Status'];
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
arr:Task[]=[
  new Task('tejas','done'),
  new Task('jaishil','pending'),
  new Task('prashil','done'),
  new Task('jinal','pending')

];
  pass:string='';
  email:string='';
    constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Task>(this.arr);
  }
  ngAfterViewInit(){
this.dataSource.paginator=this.paginator;
this.dataSource.sort=this.sort;
  }
  taskSubmit(){

  }

}
