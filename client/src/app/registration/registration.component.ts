import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

    // defines
    // *************************************
    public usersList: any = [];
    public regForm: FormGroup = new FormGroup({
        userName: new FormControl(),
        userEmail: new FormControl(),
        userPassword: new FormControl(),
        checkPasswod: new FormControl(),
    });

    constructor(private regService: RegistrationService) { }

    ngOnInit() {
        // this.getUsers();
    }


    // methods
    // *************************************
    public getUsers() {
        this.regService.getUser().subscribe((response) => {
            this.usersList = response;
        });
    }


    public singIn() {
        this.regService.regUser(this.regForm.value).subscribe((response) => {
            console.log(response);
        });
        this.regForm.reset();
    }

} // RegistrationComponent
