import { Teachers, Students } from './teachers';
import { Setquest } from './setquest';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Users} from './users';
import { Admin } from './admin';
import { Courses } from './courses';
import { Observable, pipe, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

myarray: String[] = [];
i: number = 0;
languages = this.getcourse();
 newstr: String

 redirectUrl: string;
  // baseUrl = 'newcbt2/';
  public arr = [];
  baseUrl:string = 'http://localhost/newcbt2';
 @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }


 
  selectQuestion(question) {
    this.selectedQuestion.next(question)
  }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/loginstudents.php', { username, password })
    // tslint:disable-next-line: no-shadowed-variable
    .pipe(map(Users => {
    this.setToken(Users [0].name);
    this.getLoggedInName.emit(true);
    return Users;
    }));
    }

    public mainadminlogin(ty){
      return this.httpClient.post<any>(this.baseUrl + '/mainadminlogin.php', ty);
    }

    public endexam(ty){
      return this.httpClient.post<any>(this.baseUrl + '/studentscore.php', ty);
    }

    public getmainadmin(){
      return this.httpClient.get<any>(this.baseUrl + '/getmainadmin.php');
    }

    public getallstudents(){
      return this.httpClient.get<any>(this.baseUrl + '/getstudents.php');
    }
    
   public postImage(fd : FormData): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + '/postImage.php', fd );
   }    

    public correctans(){
      return this.httpClient.get<any>(this.baseUrl + '/correctans.php');
    }

   public getoptions(){
     return this.httpClient.get<any>(this.baseUrl + '/getoptions.php');
   }
  
   public updatecourse(teachers){
     return this.httpClient.put(this.baseUrl + '/updatecourse.php?id=' + teachers.id, teachers);
   }

   public updatequest(teachers){
    return this.httpClient.put(this.baseUrl + '/updatequest.php?id=' + teachers.id, teachers);
  }

   public getTeachers() {
    return this.httpClient.get<Teachers[]>(this.baseUrl +  '/getcourses.php');
  }

   public delcourse(id){
    return this.httpClient.post(this.baseUrl  + '/deletecourse.php', id);
  }

  public getTeachersbyId(id: number){
    return this.httpClient.get<Teachers[]>(this.baseUrl + '/getcoursesbyId.php?id=' + id);
  }

  public getstudentsbyid(id: number){
    return this.httpClient.get<Students[]>(this.baseUrl + '/getstudentbyid.php?id=' + id);
  }

   public getstudentsquest(){
     return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php');
   }

   public mainadminsignup(tyy) {
    return this.httpClient.post<any>(this.baseUrl + '/mainadminsignup.php',tyy);
  }

   public getstudentsquestbycourseid(){
    // return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php?id=' + id);
    return this.httpClient.get<any>(this.baseUrl + '/getstudentquestbyid.php');

  }

    public userregistration(tyy) {
    return this.httpClient.post(this.baseUrl + '/signupstudents.php', tyy)
    }
    
    public setquest(quest){
      return this.httpClient.post(this.baseUrl + '/setquest.php', quest);
    }

    public getquest(){
      return this.httpClient.get<any>(this.baseUrl + '/getquest.php');
    }

    public inputcourses(teachers: Teachers) {
      return this.httpClient.post(this.baseUrl + '/entercourses.php', teachers);
    }

    public getquestionbyid(id: number){
      return this.httpClient.get<Setquest[]>(this.baseUrl + '/getquestionbyid.php?id=' + id);
    }

    public getcourse() {
        return this.httpClient.get<Teachers[]>(this.baseUrl + '/getcourses.php');
      }

    public adminlogin(ty) {
      return this.httpClient.post<any>(this.baseUrl + '/adminlogin.php', ty)
      }

    public adminreg(y){
      return this.httpClient.post<any>(this.baseUrl + '/adminreg.php', y)
    }

    public getcoursebyid(id) {
      return this.httpClient.get<any>(this.baseUrl + '/getcourses.php?id='+ id);
    }

  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true;
  }
  return false;
  }
}
