import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecompComponent } from './deletecomp.component';

describe('DeletecompComponent', () => {
  let component: DeletecompComponent;
  let fixture: ComponentFixture<DeletecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
