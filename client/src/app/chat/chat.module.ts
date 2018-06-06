import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {ChatService} from "./chat.service";
import {ChatComponent} from './chat.component';
import {MatCardModule} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatCardModule
  ],
  providers: [
    ChatService
  ],
  declarations: [ChatComponent]
})
export class ChatModule {
}
