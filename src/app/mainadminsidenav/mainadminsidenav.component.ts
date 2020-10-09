import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainadminsidenav',
  templateUrl: './mainadminsidenav.component.html',
  styleUrls: ['./mainadminsidenav.component.css']
})
export class MainadminsidenavComponent implements OnInit {

  public admins;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public currentadmin;

  constructor(private breakpointObserver: BreakpointObserver, public actroute: ActivatedRoute, public api: ApiService) {}

  ngOnInit(): void {
    this.displayusername();
  }



  displayusername(){
     this.api.getmainadmin().subscribe(data =>{
       let adminss = data;
       
     })
  }


}
