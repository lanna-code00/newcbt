import { EditformComponent } from './editform/editform.component';
import { TutorsComponent } from './tutors/tutors.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { MainadminsidenavComponent } from './mainadminsidenav/mainadminsidenav.component';
import { MainadminloginComponent } from './mainadminlogin/mainadminlogin.component';
import { MainadminsignupComponent } from './mainadminsignup/mainadminsignup.component';
import { ChecksignupGuard } from './checksignup.guard';
import { UpdatequestComponent } from './updatequest/updatequest.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
// import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { StuAnswersComponent } from './stu-answers/stu-answers.component';
import { OptionsComponent } from './options/options.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EntercoursesComponent } from './entercourses/entercourses.component';
import { SetquestComponent } from './setquest/setquest.component';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivateChild: [ChecksignupGuard]},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: 'mainadminlogin', pathMatch: 'full'},
  {path: 'mainadminlogin', component: MainadminloginComponent},
  {path: 'mainadminsignup', component: MainadminsignupComponent},
  {path: 'mainadminsidenav', component: MainadminsidenavComponent, children: [
    {path: '', redirectTo: 'maindashboard', pathMatch: 'full'},
    {path: 'maindashboard', component: MaindashboardComponent},
    {path: 'allstudents', component: AllstudentsComponent},
      {path: 'editform/:id', component: EditformComponent},
      {path: 'tutors', component: TutorsComponent},
  ]},
  {path: 'adminsidebar', component: AdminsidebarComponent, children: [
    {path: '', redirectTo: 'adminDash', pathMatch: 'full'},
    {path: 'adminDash', component: AdminDashComponent},
    {path: 'entercourses', component: EntercoursesComponent, children: [
      {path: 'editcourse/:id', component: EditcourseComponent},
    ]},
    {path: 'setquest', component: SetquestComponent, children: [
      {path: 'updatequest/:id', component: UpdatequestComponent},
    ]},
    {path: 'options', component: OptionsComponent},
  ]},
  {path: 'register', component: RegisterComponent},
   {path: 'sidebar', component: SidebarComponent, children: [
     {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
     {path: 'dashboard', component: DashboardComponent},
     {path: 'studentportal', component: StudentportalComponent},
     {path: 'stuAnswers/:id', component: StuAnswersComponent}
   ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
