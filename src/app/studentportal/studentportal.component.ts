import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studentportal',
  templateUrl: './studentportal.component.html',
  styleUrls: ['./studentportal.component.css']
})
export class StudentportalComponent implements OnInit {
  studentscourse = [];
    constructor(public router: Router, public service: ApiService) { }

  ngOnInit(): void {
    this.loadstudentscourse();
  }

   loadstudentscourse(){
     this.service.getcourse().subscribe(data=>{
       let yy = data;
       this.studentscourse = JSON.parse(JSON.stringify(yy));
       console.log(this.studentscourse);
     })
   }
   
   viewQuestions(id){
    this.router.navigate(['/sidebar/stuAnswers/' + id]);
    console.log(id);
  }
}

