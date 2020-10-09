import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  submitted = false;
  incorrect = false;

  constructor(public router: Router, public fb: FormBuilder, public dataService: ApiService) {
  }
      angForm = this.fb.group({
        identification: ['', [Validators.required, Validators.minLength(1), Validators.email]],
        password: ['', Validators.required]
      });

  ngOnInit(): void {
  }

  postdata() {

    let myadminlogin = this.angForm.value;
    console.log(myadminlogin)
      this.dataService.adminlogin(myadminlogin).pipe(first()).subscribe(data =>{
        let logs = data;
        console.log(logs);
        let e = logs.filter(users => {
          if (myadminlogin.identifcation == users.identifcation && myadminlogin.password == users.password) {
            this.router.navigate(['/adminsidebar'])
          }else{
            this.incorrect = true;
          }
        })
      })
  }
    get identification() { return this.angForm.get('identification'); }
    get password() { return this.angForm.get('password'); }
}
