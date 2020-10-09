import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetquestComponent } from './setquest.component';

describe('SetquestComponent', () => {
  let component: SetquestComponent;
  let fixture: ComponentFixture<SetquestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetquestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
