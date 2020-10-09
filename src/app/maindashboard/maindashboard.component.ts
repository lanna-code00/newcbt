import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
  public noofstudents;
  public noofstaffs;
  public teachers;
  public students;
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getallstudents().subscribe(data =>{
    this.noofstudents = data;
    this.students  = this.noofstudents.length;
    console.log(this.students);
    })

    this.api.getTeachers().subscribe(data =>{
      this.noofstaffs = data;
      this.teachers = this.noofstaffs.length;
      console.log(this.teachers);
      })
   

  }

}


