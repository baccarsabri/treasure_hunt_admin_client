import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

url:string;

  constructor(private http:HttpClient,private jwtHelper:JwtHelperService)  {
    this.url=environment.backendurl;
   }
  getUserbyUsername(username:string):Observable<any>{
    return this.http.post(this.url+'api/admin/username', 
     {
      username
     }
    )
  }
  edit(id:any,username:string,password:string):Observable<any>{
    return this.http.put(this.url+'api/admin/edit', 
     {
      id,username,password
     }
    )
  }
}
