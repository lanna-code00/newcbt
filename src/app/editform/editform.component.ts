import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Students } from './../teachers';


@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  @Input() students: Students;


  public edits = [];

  public student_id;
  
  public angForm;

  constructor(public service: ApiService, public fb: FormBuilder, public actroute: ActivatedRoute) { }

  
  ngOnInit(): void {
      this.editstudents();
     
      this.angForm = this.fb.group({
        id : [''],
        firstname : ['', Validators.required],
        lastname : ['', Validators.required],
        surname : ['', Validators.required],
        email : ['', Validators.required],
        username : ['', Validators.required],
        address : ['', Validators.required],
        parentsno : ['', Validators.required],
        phone: ['', Validators.required]
      })
  }


  editstudents(){
    const ids = this.actroute.snapshot.params.id; 
    console.log(ids);
    this.service.getstudentsbyid(ids).subscribe(data =>{
    console.log(data);
    this.angForm.patchValue(data);
     })
  }

}
