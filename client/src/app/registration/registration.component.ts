import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor( private regService: RegistrationService ) {}

  public usersList: any = [];
  public regForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    userPassword: new FormControl(),
    checkPasswod: new FormControl(),
  });
  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.regService.getUser().subscribe( (response) => {
      this.usersList = response;
    });
  }

  public singIn() {
    this.regService.regUser(this.regForm.value).subscribe( () => {
      this.getUsers();
    });
    this.regForm.reset();
  }
}
