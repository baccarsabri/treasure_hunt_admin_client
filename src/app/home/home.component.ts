import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private LoginService:LoginService, private router:Router) { }


   

  
  ngOnInit(): void {
 
   
  }
  logout(){
    this.LoginService.signOut();
    this.router.navigate(['/']);
  }



    

}
