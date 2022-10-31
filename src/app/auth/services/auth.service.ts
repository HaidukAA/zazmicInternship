import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
 
  // tslint:disable-next-line: no-empty
  constructor(private router: Router, private http: HttpClient) {  }

  public setToken(token: string, value: string): void {

    localStorage.setItem( token, JSON.stringify(value));
    
  }

  public getToken(token: string) {
    
    return localStorage.getItem(JSON.stringify(token));
    
  }

  

  public removeToken(token: string) {
    localStorage.removeItem(token);
  }
  
  
  isAuthenticate(): boolean {
    
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  public clearToken() {
    localStorage.clear();
  }
  
}
