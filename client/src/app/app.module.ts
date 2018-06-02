import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule}
  from "@angular/material";

import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from "./app-routing.module";
import {ChatRoutingModule} from "./chat/chat-routing.module";

import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {ChatComponent} from "./chat/chat.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    AppRoutingModule,
    ChatRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
