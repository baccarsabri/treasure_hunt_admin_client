import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any ;
  authToken: any;
  url:string;

  
   
   
  constructor(private http:HttpClient,private jwtHelper:JwtHelperService)  {
    this.url=environment.backendurl;
   }
  loginUser(username:string,password:string ):Observable<any>{
    return this.http.post(this.url+'api/admin/login', 
     {
      username,password
     }
    )
  }
   
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string,): void {
    window.sessionStorage.removeItem('auth');
    window.sessionStorage.setItem('auth', token);
  }
 
  public getToken(): string | null {
    return window.sessionStorage.getItem('auth');
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  isAuthenticated(): boolean {
    
    const token = window.sessionStorage.getItem('auth');
    if(token !=null){
      return true
    }
    else {
      return false;
    }
}
}
