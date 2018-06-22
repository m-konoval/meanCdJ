import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { RegistrationModule } from './registration/registration.module';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        ChatModule,
        AuthModule,
        RegistrationModule,
        SharedModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
