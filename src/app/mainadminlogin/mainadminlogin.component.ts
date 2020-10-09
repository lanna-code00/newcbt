import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { first } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mainadminlogin',
  templateUrl: './mainadminlogin.component.html',
  styleUrls: ['./mainadminlogin.component.css']
})
export class MainadminloginComponent implements OnInit {
  
  submitted = false;

  incorrect = false;



  constructor(public router: Router, public api: ApiService, public fb: FormBuilder) { }

  adminlogin = this.fb.group({

    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    });

  ngOnInit(): void {
  }
 
    get myusername(){ return this.adminlogin.get('username'); }
    get mypassword(){ return this.adminlogin.get('password'); }

    login(){
     let myadminlogin = this.adminlogin.value;
      this.api.mainadminlogin(myadminlogin).pipe(first()).subscribe(data =>{
        let logs = data;
        let e = logs.filter(users => {
          if (myadminlogin.username == users.username && myadminlogin.password == users.password) {
            this.router.navigate(['/mainadminsidenav'])
          }else{
            this.incorrect = true;
          }
        })
      },
      error => {
        alert('User name or password is incorrect');
        })

    }

}
