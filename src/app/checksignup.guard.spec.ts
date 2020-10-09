import { TestBed } from '@angular/core/testing';

import { ChecksignupGuard } from './checksignup.guard';

describe('ChecksignupGuard', () => {
  let guard: ChecksignupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChecksignupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
