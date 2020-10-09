import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { of } from 'rxjs';
// import { Courses } from '../courses';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mainadminsignup',
  templateUrl: './mainadminsignup.component.html',
  styleUrls: ['./mainadminsignup.component.css']
})
export class MainadminsignupComponent implements OnInit {
@ViewChild("picture", {static: false}) fileUpload: ElementRef;
public files; 
 selectedfile: File;
public myforms;
submitted = false;

editFile: boolean = false;
el: any;


gender: Gender[] = [
  {value: 'female-0', viewValue: 'Female'},
  {value: 'male-1', viewValue: 'Male'}
  
]
  photo: Blob;

 constructor(public http: HttpClient, public router: Router, public api: ApiService, public fb: FormBuilder,private cd: ChangeDetectorRef
  ) { }


    mainadmin = this.fb.group({
    id: [''],
    firstname: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmpassword: ['', Validators.required],
    gender: ['', Validators.required],
    picture: ['', Validators.required]

    });

 ngOnInit(): void {
  
}

get f() { return this.mainadmin.controls; }

  
get myfirstname(){ return this.mainadmin.get('firstname'); }
get mysurname(){ return this.mainadmin.get('surname'); }
get myemail(){ return this.mainadmin.get('email'); }
get myusername(){ return this.mainadmin.get('username'); }
get myaddress(){ return this.mainadmin.get('address'); }
get myphone(){ return this.mainadmin.get('phone'); }
get mypassword(){ return this.mainadmin.get('password'); }
get myconfirmpassword(){ return this.mainadmin.get('confirmpassword'); }
get mygender(){ return this.mainadmin.get('gender'); }
get mypicture(){ return this.mainadmin.get('picture'); }


setPhoto(event){
  this.photo = event.target.files[0];
  console.log(this.photo);
}

    postdata() {
      let myforms = this.mainadmin.value;
      console.log(myforms);
      if (this.mainadmin.invalid) {
         setTimeout(() => {
          this.submitted = true;
      }, 2000);
         return;
      } else{ this.api.mainadminsignup(myforms).subscribe(data => {
        console.log(data)
          });
              const fd = new FormData();
              fd.append("picture",this.photo);
              this.api.postImage(fd).subscribe(res => console.log(res));
          }

  }
}
