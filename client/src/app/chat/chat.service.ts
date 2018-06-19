import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatMassage } from '../chat/chat.model';

@Injectable()
export class ChatService {
  constructor(private http: HttpClient) {}

  private HOST_URL      = 'http://localhost:8081/massages';
  private CONTENT_TYPE  = {'Content-type': 'application/json'};


  public getMassages() {
    return this.http.get(this.HOST_URL);
  }


  public sendMassage(massage: any) {
    const options = {
      headers: new HttpHeaders(this.CONTENT_TYPE)
    };

    return this.http.post<ChatMassage>(this.HOST_URL, massage, options);
  }


  public deleteMassage (massage: any) {
    const options = {
      headers: new HttpHeaders(this.CONTENT_TYPE),
      body: massage
    };

    return this.http.delete(this.HOST_URL, options);
  }

} // ChatService
