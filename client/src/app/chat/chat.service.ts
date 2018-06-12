import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private HOST_URL = 'http://localhost:8081/massages';
  private CHAT_URL = '/massages';

  constructor(private http: Http) {
  }

  public getMassages() {
    return this.http.get(this.HOST_URL);
  }

  public sendMassage(massage: any) {
    return this.http.post(this.HOST_URL, massage);
  }

}
