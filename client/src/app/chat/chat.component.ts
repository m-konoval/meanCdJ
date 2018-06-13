import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMassage } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chatMassages: ChatMassage[] = [];
  public massageControl: FormControl = new FormControl();
  private timer;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.getChat();

    // this.timer = setInterval(() => {
    //   this.getChat();
    // }, 10000);
  }

  // ngOnDestroy() {
  //   clearTimeout(this.timer);
  // }

  getChat() {
    this.chatService.getMassages().subscribe((response) => {
      this.chatMassages = response.json();
    }, (error) => {
      console.error('Error', error);
    });
  }

  public sendMassage() {
    const massage = new ChatMassage();
    massage.userName = localStorage.getItem('user_name');
    massage.massage = this.massageControl.value;

    this.chatService.sendMassage(massage).subscribe(() => {
      this.getChat();
      this.massageControl.setValue(' ');
    });
  }

}
