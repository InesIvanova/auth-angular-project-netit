import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUsersPath: string = environment.apiUrl + 'users'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.getUsersPath)
  }


}
