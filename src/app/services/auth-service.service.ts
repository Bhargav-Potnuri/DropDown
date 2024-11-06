import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private readonly signedInKey = 'signedIn';
  constructor() {}
  setSignedInStatus(signedIn: boolean): void {
    localStorage.setItem(this.signedInKey, signedIn ? 'true' : 'false');
  }

  isSignedIn(): boolean {
    const signedInValue = localStorage.getItem(this.signedInKey);
    return signedInValue === 'true';
  }
}
