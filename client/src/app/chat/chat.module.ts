import { SocketService } from './socket.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8081', options: {} };

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    ChatService,
    SocketService
  ],
  declarations: [ChatComponent]
})
export class ChatModule {}
