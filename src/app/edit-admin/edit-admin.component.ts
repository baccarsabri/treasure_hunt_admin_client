import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { AdminService } from './../service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {



  constructor(private AdminService:AdminService ,private LoginService:LoginService , private router:Router , private toastr: ToastrService) { }
  id:any;
  username:string="";
  oldpassword:string=""; 
  newpassword:string="";
  confirmPassword:string="";
  password:string="";


  ngOnInit(): void {
    this.id=this.LoginService.getUser()._id;
   
    this.AdminService.getUserbyUsername(this.LoginService.getUser().username).subscribe(
              
      res => {
        this.username=res.user.username;
        this.password=res.user.password;
     
      });
  }
  submit(){
   if(this.oldpassword!=this.password){
    this.toastr.error('Verifier votre ancien Password');

   }
   else{
    if(this.newpassword!=this.confirmPassword){
      this.toastr.error('Verifier votre Nouveau Password');
    }else{
      this.AdminService.edit(this.id,this.username,this.newpassword).subscribe(
              
        res => {
          if(res.success==true){
            this.router.navigate(['/home']);
            this.toastr.success('Success');
          }
  
          
          this.LoginService.saveUser(res.user);
    }
      );
    }
   }
  

}
}
