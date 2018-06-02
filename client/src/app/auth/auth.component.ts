import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public nameControl: FormControl = new FormControl();
  constructor() {
  }

  public Login( e: any ) {
    console.log(e);
  }
}
