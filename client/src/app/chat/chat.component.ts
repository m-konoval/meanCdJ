import { SocketService } from './socket.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMassage } from '../chat/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private socket: SocketService
  ) {}

  public msg: string;
  public chatMassages: any = [];
  public massageForm: FormGroup = new FormGroup({
    massageControl: new FormControl()
  });


  ngOnInit() {
    this.getChat();


    this.socket
      .getMessage().subscribe(msg => {
        this.msg = '1st ' + msg;
      });
  }


  sendMsg(msg) {
    this.socket.sendMessage(msg);
  }


  public getChat() {
    this.chatService.getMassages().subscribe((response) => {
      this.chatMassages = response;
    }, (error) => {
      console.error('Error', error);
    });
  }


  public sendMassage() {
    const massage = new ChatMassage();
    const user = JSON.parse(localStorage.getItem('user'));

    massage.userId = user._id;
    massage.massage = this.massageForm.controls.massageControl.value;

    this.chatService.sendMassage(massage).subscribe(() => {
      this.getChat();
      this.massageForm.reset();
    });
  }


  public delete(massage) {
    this.chatService.deleteMassage(massage).subscribe(() => {
      this.getChat();
    });
  }

} // ChatComponent
