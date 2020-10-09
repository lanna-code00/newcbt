import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuAnswersComponent } from './stu-answers.component';

describe('StuAnswersComponent', () => {
  let component: StuAnswersComponent;
  let fixture: ComponentFixture<StuAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
