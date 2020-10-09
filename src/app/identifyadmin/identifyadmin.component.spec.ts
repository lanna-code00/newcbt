import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyadminComponent } from './identifyadmin.component';

describe('IdentifyadminComponent', () => {
  let component: IdentifyadminComponent;
  let fixture: ComponentFixture<IdentifyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
