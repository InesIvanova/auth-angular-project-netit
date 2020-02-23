import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath: string = environment.apiUrl + 'login';
  private registerPath: string = environment.apiUrl + 'register';

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    if(localStorage.getItem('token')) {
      return true
    }
    return false;
  }

  login(data): Observable<any> {
    return this.http.post(this.loginPath, data)
  }

  register(data): Observable<any> {
    return this.http.post(this.registerPath , data)
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
