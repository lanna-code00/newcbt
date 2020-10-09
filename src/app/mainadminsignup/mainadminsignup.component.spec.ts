import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainadminsignupComponent } from './mainadminsignup.component';

describe('MainadminsignupComponent', () => {
  let component: MainadminsignupComponent;
  let fixture: ComponentFixture<MainadminsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainadminsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainadminsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
