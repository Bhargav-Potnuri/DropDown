import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

export const signinGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  if (inject(AuthServiceService).isSignedIn()) {
    // Allow navigation if the form has been submitted
    inject(Router).navigate(['/account']);
    return true;
  } else {
    // Redirect to signin page or any other route
    inject(Router).navigate(['/']);
    return false; // Prevent navigation if the form has not been submitted
  }
};
