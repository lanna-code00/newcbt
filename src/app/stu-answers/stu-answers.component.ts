import { element } from 'protractor';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-stu-answers',
  templateUrl: './stu-answers.component.html',
  styleUrls: ['./stu-answers.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StuAnswersComponent implements OnInit {
  
  public noquestions = false;
  public answers = [];
  public students_id;
  public currentStudents;
  public correctpot = [];
  public anything = [];
  public myquestId;
  myopt: string;
  public optional;
//   public optionA = '';
 public scores = '';
 public course_id = '';
 public student_id  = '';
  public checks;
  public bindings = 0;
  public right = [];
  public wrong = [];
  public newform;

  constructor(private fb: FormBuilder, public service: ApiService, public rout: Router, 
              public actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadquests();
    // this.newform = this.fb.group({
    //    scores: this.optional,
    //    course_id: '',
    //    student_id: '',
    // })
  }

  loadquests(){
    this.service.getstudentsquestbycourseid().subscribe(data=>{
    const newdata = data;
    // console.log("data:", newdata);
    this.answers = newdata;
    this.students_id = this.actroute.snapshot.params.id; 
    console.log('students_id: ', this.students_id);
    const y = newdata.filter(stu => stu.Exam_No === this.students_id);
    this.answers = y;
    if(y.length == 0){
     this.noquestions = true;
   }
    });

  }

  checkcorrectanswers(qid) {
      this.service.correctans().subscribe(data => {
      let e = data.filter(stus => stus.quest_id === qid);
      console.log(e)
      e.forEach(element => {
      if (this.myopt !== element.correctans) {
      console.log(this.myopt);
      this.subtractingscore();
      console.log('wrong');
       } 
      else {
        this.addingscore();
      }

     });
    });
  }

  
  
  addingscore(){
    this.bindings++;
    // this.right.push(this.bindings);
    let optional = this.bindings++
    // console.log(optional);

    this.optional = optional;
    console.log( this.optional );
    
  }
      submitexam(){
        this.service.endexam(this.optional).subscribe(data =>{
          console.log(data);
        })
      }

 subtractingscore(){
    this.bindings--;
  }

}
