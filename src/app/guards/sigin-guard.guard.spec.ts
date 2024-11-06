import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { siginGuardGuard } from './sigin-guard.guard';

describe('siginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => siginGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
