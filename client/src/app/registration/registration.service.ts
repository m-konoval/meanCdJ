import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  private HOST_URL = 'http://localhost:8081/users';

  public getUser() {
    return this.http.get(this.HOST_URL);
  }

  public regUser(user: any) {
    const options = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post(this.HOST_URL, user, options);
  }
}
