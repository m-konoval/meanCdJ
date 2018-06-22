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

    // defines
    // *************************************
    public chatMassages: any = [];
    public massageForm: FormGroup = new FormGroup({
        massageControl: new FormControl()
    });

    constructor( private chatService: ChatService ) { }


    ngOnInit() {
        this.getChat();

        this.chatService.subject.subscribe(() => {
            this.getChat();
        });
    }


    // methods
    // *************************************
    public getChat() {
        this.chatService.getMassages().subscribe((response) => {
            this.chatMassages = response;
        }, (error) => {
            console.error('Error :', error);
        });
    }


    public sendMassage() {
        const massage = new ChatMassage();
        const user = JSON.parse(localStorage.getItem('user'));

        massage.userId = user._id;
        massage.massage = this.massageForm.controls.massageControl.value;

        this.chatService.sendMassage(massage).subscribe(() => {
            this.chatService.liveUpdate();

            this.massageForm.reset();
        });
    }


    public delete(massage) {
        this.chatService.deleteMassage(massage).subscribe(() => {
            this.getChat();
        });
    }

} // ChatComponent
