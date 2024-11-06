import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const signedIn = inject(AuthServiceService).isSignedIn();
  {
    // Allow navigation if the form has been submitted
    if (!signedIn) {
      inject(Router).navigate(['/signup']);
    }
    return signedIn;
  }
};
