import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
 
  // tslint:disable-next-line: no-empty
  constructor(private router: Router) { }

  public setToken(token: string, value: string): void {
    try {
    localStorage.setItem( token, JSON.stringify(value));
    } 
    catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  public getToken(token: string) {
    try { 
    return localStorage.getItem(JSON.stringify(token));
    }
    catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
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
