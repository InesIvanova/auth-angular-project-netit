import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resourcePath = environment.apiUrl + 'unknown'
  constructor(private http: HttpClient) { }

  getResources(): Observable<any> {
    return this.http.get(this.resourcePath)
  }
}
