import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthgoogleService } from './authgoogle.service';
import { Profile } from '../../landingpage/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginGoogleService: AuthgoogleService = inject(AuthgoogleService);
  const router: Router = inject(Router);
  
  const loggedProfile: Profile = loginGoogleService.getLoggedProfile();

  if(loggedProfile){
    return true;
  }

  router.navigate(['']);
  return false;
};
