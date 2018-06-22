import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    // defines
    // *************************************

    constructor(private router: Router) { }


    // methods
    // *************************************
    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (!localStorage.getItem('user')) {
            this.router.navigate(['']);
            return false;
        }

        return true;
    }
} // AuthGuard
