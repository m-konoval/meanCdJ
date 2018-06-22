import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://wsua-0657:8081', options: {} };

@NgModule({
    imports: [
        CommonModule,
        ChatRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        SocketIoModule.forRoot(config)
    ],
    providers: [ChatService],
    declarations: [ChatComponent]
})
export class ChatModule { }
