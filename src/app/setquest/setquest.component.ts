import { Setquest } from './../setquest';
import { EntercoursesComponent } from './../entercourses/entercourses.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import 'datatables.net';
import * as $ from 'jquery';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-setquest',
  templateUrl: './setquest.component.html',
  styleUrls: ['./setquest.component.css'],
  providers: [EntercoursesComponent]
})
export class SetquestComponent implements OnInit {
sumitted = false;
 public myquest;
 public papertype = '';
 public question = '';
 public optionA = '';
 public optionB = '';
 public optionC = '';
 public optionD  = '';
 public correctans = '';
 public marks = '';
 public questArr = [];
 public setquests = [];
 public options = [];
  constructor(public rout: Router, public service: ApiService, public fb: FormBuilder,
              public entercourse: EntercoursesComponent) {
   
   }


  ngOnInit(): void {
    this.loadquestions();
    this.myquest = this.fb.group({
      papertype: '',
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctans: '',
      marks: '',
     });
    
    
  }

  loadquestions() {
    ($('#myTable') as any).DataTable();
    this.service.getquest().subscribe((data) =>{
      let tt = data;
      console.log(tt);
      this.questArr = JSON.parse(JSON.stringify(tt));
      // console.table(this.questArr)
      console.log(this.questArr);
      // this.coursess = JSON.parse(JSON.stringify(tt));
    });

    // this.service.getoptions().subscribe(data =>{
    //   let option = data;
    //   console.log(option);
    //   this.options = JSON.parse(JSON.stringify(option));

    // });

    this.service.getcourse().subscribe(list =>{
      let ww = list;
      this.setquests = JSON.parse(JSON.stringify(ww));
      console.log(this.setquests);
    });
  
  }

  editbtn(edit_id){
    this.rout.navigate(['/adminsidebar/setquest/updatequest/' + edit_id]);
    console.log()
    }

  displayquestiontable(){
    setTimeout(() =>{
      this.sumitted = true;
    }, 50);
  }

  hidequestiontable(){
    setTimeout(() =>{
      this.sumitted = false;
    }, 50);
  }
  hidequestiontables(){
    setTimeout(() => {
      this.sumitted = false;
    }, 50);
  }
  
submitquest() {
    let myquestion = this.myquest.value;
    console.log(this.myquest.value);
    this.service.getquest();
    this.service.setquest(myquestion).subscribe(data =>{
    console.log(data);
    this.loadquestions();
  });
  }

}
