import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequestComponent } from './updatequest.component';

describe('UpdatequestComponent', () => {
  let component: UpdatequestComponent;
  let fixture: ComponentFixture<UpdatequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
