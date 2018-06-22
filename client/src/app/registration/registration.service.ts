import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    // defines
    // *************************************
    private HOST_URL = 'http://wsua-0657:8081/users';

    constructor(private http: HttpClient) { }

    public getUser() {
        return this.http.get(this.HOST_URL);
    }


    // methods
    // *************************************
    public regUser(user: any) {
        const options = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        };

        return this.http.post(this.HOST_URL, user, options);
    }

} // RegistrationService
