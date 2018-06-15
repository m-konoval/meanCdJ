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

  public regForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    userPassword: new FormControl(),
    checkPasswod: new FormControl(),
  });
  ngOnInit() {}

  public singIn() {
    console.log(this.regForm.controls);
    this.regForm.reset();
  }
}
