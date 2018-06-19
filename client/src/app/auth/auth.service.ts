import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http: HttpClient ) {}

  private HOST_URL = 'http://localhost:8081/authorize';

  public authorize(user) {
    const options = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post<UserModel>(this.HOST_URL, user, options);
  }
}
