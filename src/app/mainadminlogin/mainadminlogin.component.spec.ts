import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainadminloginComponent } from './mainadminlogin.component';

describe('MainadminloginComponent', () => {
  let component: MainadminloginComponent;
  let fixture: ComponentFixture<MainadminloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainadminloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainadminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
