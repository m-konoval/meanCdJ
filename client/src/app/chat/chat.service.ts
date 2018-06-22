import { ChatMassage } from './chat.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import { Subject } from 'rxjs';

@Injectable()
export class ChatService {

    // defines
    // *************************************
    private HOST_URL = 'http://wsua-0657:8081/massages';
    private CONTENT_TYPE = { 'Content-type': 'application/json' };

    public subject: Subject<any> = new Subject;

    constructor(
        private http: HttpClient,
        private socket: Socket
    ) {
        this.socket.fromEvent('updateChat').subscribe(response => {
            this.subject.next(true);
        });
    }


    // methods
    // *************************************
    public getMassages() {
        return this.http.get<ChatMassage[]>(this.HOST_URL);
    }


    public sendMassage(massage: any) {
        const options = {
            headers: new HttpHeaders(this.CONTENT_TYPE)
        };

        return this.http.post<ChatMassage>(this.HOST_URL, massage, options);
    }


    public deleteMassage(massage: any) {
        const options = {
            headers: new HttpHeaders(this.CONTENT_TYPE),
            body: massage
        };

        return this.http.delete(this.HOST_URL, options);
    }

    public liveUpdate() {
        this.socket.emit('send');
    }

} // ChatService
