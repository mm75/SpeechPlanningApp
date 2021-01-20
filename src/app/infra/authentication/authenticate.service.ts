import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class AuthenticateService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.auth.isAuthenticated$.subscribe(
      (loggedIn) => {
        if (!loggedIn) {
          this.auth.loginWithRedirect();
          return false;
        }

        return true;
      }
    );

    return true;
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
