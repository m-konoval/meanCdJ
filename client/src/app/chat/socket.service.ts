import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Socket } from 'ng-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    constructor(private socket: Socket) {}

    getMessage() {
        return this.socket
            .fromEvent<any>('msg')
            .pipe(map(data => data.msg));
    }

    sendMessage(msg: string) {
        this.socket
            .emit('msg', msg);
    }
}
