import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntercoursesComponent } from './entercourses.component';

describe('EntercoursesComponent', () => {
  let component: EntercoursesComponent;
  let fixture: ComponentFixture<EntercoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntercoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntercoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
