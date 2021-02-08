import { StorageService } from './../../presentation/shared/services/storage.service';
import { environment } from 'src/environments/environment';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthenticateService } from '../authentication/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  private userToken: string;

  constructor(
    private auth: AuthenticateService,
    private storageService: StorageService
  ) {
    this.userToken = this.storageService.getData('userToken');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.getToken();

    try {
      if (this.userToken) {
        const tokenReq = req.clone({
          setHeaders: { Authorization: `Bearer ${this.userToken}` },
        });

        return next.handle(tokenReq);
      }
    } catch (error) {
      return this.auth.auth.getAccessTokenSilently().pipe(
        mergeMap((token) => {
          const tokenReq = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });

          this.storeToken(token);

          return next.handle(tokenReq);
        }),

        catchError((err) => throwError(err))
      );
    }
  }

  storeToken(token: string): void {
    this.storageService.setData('userToken', token);
  }

  getToken(): void {
    this.userToken = this.storageService.getData('userToken');
  }
}
