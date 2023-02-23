import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router'; 
import { LoginService } from '../service/login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate  {
role:any;
  constructor(private LoginService:LoginService , private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    if (!this.LoginService.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
    else{
      
      return true;}
    
    
  }
  
}
