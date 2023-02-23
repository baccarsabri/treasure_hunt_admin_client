import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
password:string="";




  constructor(private loginservs:LoginService, private router:Router ,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.loginservs.getToken()!=null){
      this.router.navigate(['/home']);
    }
  }
  loginUser(){
    this.loginservs.loginUser(this.username, this.password).subscribe(
      
      res => {
        
        
        if (res.success===true){
          
       
          this.loginservs.saveToken(res.user.token);
          this.loginservs.saveUser(res.user.result);
        
            this.router.navigate(['/home']);
          }
          else{
            this.toastr.warning('Veuiller verifier vos cordonner');

            
          }
        
       
          
         
         
        
        
      }

    );
    
  }

}
