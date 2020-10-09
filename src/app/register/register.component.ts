import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


interface Gender {
    value: string;
    viewValue: string;
  }

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

submitted = false;

correct = false;


gender: Gender[] = [
    {value: 'female-0', viewValue: 'Female'},
    {value: 'male-1', viewValue: 'Male'}
    
  ]

constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {}

angForm = this.fb.group({

    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    address: ['', Validators.required],
    parentsno: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    gender: ['', Validators.required],

    });

ngOnInit() {
}

get myfirstname(){ return this.angForm.get('firstname'); }
get mylastname(){ return this.angForm.get('lastname'); }
get mysurname(){ return this.angForm.get('surname'); }
get myemail(){ return this.angForm.get('email'); }
get myusername(){ return this.angForm.get('username'); }
get myaddress(){ return this.angForm.get('address'); }
get myparentsno(){ return this.angForm.get('parentsno'); }
get myphone(){ return this.angForm.get('phone'); }
get mypassword(){ return this.angForm.get('password'); }
get mygender(){ return this.angForm.get('gender'); }

postdata() {
    let myforms = this.angForm.value;
    console.log(myforms);
    if (this.angForm.invalid) {
       return;
    }
    this.dataService.userregistration(myforms).subscribe(data => {
    console.log(data)
    });

    if(this.angForm.valid){
      this.correct = true;
    }
        
}

}