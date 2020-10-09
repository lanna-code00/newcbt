import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Teachers } from '../teachers';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  coursess: Teachers[];


  constructor(public router: Router, public fb: FormBuilder, public dataService: ApiService) { }

  angForm = this.fb.group({
      name : ['', Validators.required],
      course : ['', Validators.required],
      questNo : ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
      });

  ngOnInit(): void {
    this.loadcourses();
  }

  loadcourses(){
      this.dataService.getcourse().subscribe((data: Teachers[]) =>{
      this.coursess = data;
      console.log(this.coursess);
      this.coursess = JSON.parse(JSON.stringify(this.coursess));
      console.log(this.coursess);
    });
  }

  postdata(){
    let formValue = this.angForm.value;
    console.log(formValue);
    this.dataService.getcourse();
    this.dataService.inputcourses(formValue).subscribe(data => {
    this.router.navigate(['/adminsidebar/entercourses']);
    this.loadcourses();
  });
}
}
