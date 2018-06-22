import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../auth/user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    // defines
    // *************************************
    private HOST_URL = 'http://wsua-0657:8081/authorize';

    constructor(private http: HttpClient) { }


    // methods
    // *************************************
    public authorize(user) {
        const options = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        };

        return this.http.post<UserModel>(this.HOST_URL, user, options);
    }

} // AuthService
