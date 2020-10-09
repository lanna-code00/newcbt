import { Teachers } from './../teachers';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  public angForm2;
  public newquestArr = [];
  public setquests = [];
  public student_id;
  public currentStudents;


  constructor(public rout: Router, public fb: FormBuilder,public actroute: ActivatedRoute,
     public dataService: ApiService) { }
 

  ngOnInit(): void {
    this.updating();
    this.angForm2 = this.fb.group({
      id : [''],
      name : ['', Validators.required],
      course : ['', Validators.required],
      questNo : ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });

    $('#cancel').on('click', () => {
      $('#firstmodal').fadeOut(2000);
      this.rout.navigate(['/adminsidebar/entercourses/']);
    })
  }

  updating(){
    this.dataService.getcourse().subscribe(data =>{
      this.newquestArr = JSON.parse(JSON.stringify(data));
      this.student_id = this.actroute.snapshot.params.id; 
      let newupdate = this.newquestArr.filter(stu => stu.course_id == this.student_id);
      console.log(newupdate);
      this.currentStudents = newupdate[0];
      console.log(this.currentStudents);
      this.angForm2.setValue({
          id: this.currentStudents.id,
          name: this.currentStudents.name,
          course: this.currentStudents.course,
          questNo: this.currentStudents.questNo,
          date: this.currentStudents.date,
          time: this.currentStudents.time,
      })
    })
  }


  update(){
    let newform = this.angForm2.value;
    console.log(newform);
    this.dataService.updatecourse(newform).subscribe(data =>{
      this.dataService.getcourse().subscribe(datas => {
        console.log(datas)
      });
      console.log(data);
      this.rout.navigate(['/adminsidebar/entercourses/']);
    },
    error =>{
      alert(error);
    })
  }
  
}
