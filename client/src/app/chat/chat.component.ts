import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMassage } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chatMassages: ChatMassage[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.getChat();
  }

  getChat() {
    this.chatService.getMassages().subscribe((response) => {
      this.chatMassages = response.json();
    }, (error) => {
      console.error('Error', error);
    });
  }

}
