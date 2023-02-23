import { AdminService } from './../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignupService } from './../service/signup.service';
import { Route, Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private SignupService:SignupService, private router:Router ,private LoginService:LoginService ,private AdminService:AdminService,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.LoginService.getToken()!=null){
      this.router.navigate(['/home']);
    }

  }
  username:string="";
password:string="";
  signup(){

    this.AdminService.getUserbyUsername(this.username).subscribe(
      
      r => {
     if(this.username.length==0){
      this.toastr.error('identifiant obligatoire');
     }
     else{
      if(r.user){
        this.toastr.warning('identifiant deja existe');
      }
      else{
        if(this.password.length<8){
          this.toastr.error('mot de passe doit contenir au moins 8 caractères');

        }
      
        else{
          this.SignupService.signup(this.username, this.password).subscribe(
    
            res => {
              
              
              if (res.success===true){
                
             
                
                  this.LoginService.loginUser(this.username, this.password).subscribe(
                    
                    r => {
                      
                      
                      if (r.success===true){
                        
                     
                        this.LoginService.saveToken(r.user.token);
                        this.LoginService.saveUser(r.user.result);
                      
                          this.router.navigate(['/home']);
                        }
                        else{
                          this.toastr.warning('Veuiller verifier vos cordonner');
              
                          
                        }
                      
                     
                        
                       
                       
                      
                      
                    }
              
                  )
              }
                
                
                else{
                  this.toastr.error("Veuiller remplir l'indentifiant ");
                  
                }
                 
      
      }
      );
        
       

      }
     }
     
      }}
    )



   
  }
}
