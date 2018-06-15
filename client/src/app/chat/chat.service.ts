import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChatService {
  constructor(private http: HttpClient) {}

  private HOST_URL = 'http://localhost:8081/massages';


  public getMassages() {
    return this.http.get(this.HOST_URL);
  }


  public sendMassage(massage: any) {
    const options = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.post(this.HOST_URL, massage, options);
  }


  public deleteMassage (massage: any) {
    const options = {
      headers: new HttpHeaders({'Content-type': 'application/json'}),
      body: massage
    };

    return this.http.delete(this.HOST_URL, options);
  }

}
