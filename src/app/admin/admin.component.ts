import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  submitted = false;

constructor(public router: Router, public dataService: ApiService, public fb: FormBuilder) { 
}
angForm = this.fb.group({
  email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
  password: ['', Validators.required],
  name: ['', Validators.required],
  identification: ['', Validators.required],
});

ngOnInit(): void {
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
get identification() { return this.angForm.get('identification'); }

postdata()
{
  let myforms = this.angForm.value;
  console.log(myforms);
  if (this.angForm.invalid) {
    return;
 } else if (this.angForm.valid){
  this.router.navigate(['/adminlogin'])
 }
 
 else{ 
  this.dataService.adminreg(myforms).subscribe(data => {
    console.log(data)
    
      });
}

}

}
