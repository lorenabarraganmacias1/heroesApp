import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})


export class AuthService {

    private baseUrl = environments.baseUrl; 
    private user?: User;

    constructor(private http: HttpClient) { }

    get currentUser():User | undefined{
        if( !this.user) return undefined;
        return structuredClone (this.user);
    }

    login( email:string, password:string):Observable<User>{
        
        return this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap(user => this.user = user),
                tap( user => localStorage.setItem('token', user.id.toString())),
            )
    }

    logout() {
        this.user = undefined;
        localStorage.clear();
    }
    
}
