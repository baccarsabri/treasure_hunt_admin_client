import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from './../service/questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:any=this.ActivatedRoute.snapshot.params['id'];
  username:any;
  password:any;
  score:any;
  constructor(private toastr: ToastrService, private QuestionsService:QuestionsService, private router:Router , private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.QuestionsService.userById(this.id).subscribe(
      res=>{
        if(res.success==true){
          this.username=res.user.username;
          this.password=res.user.password;
          this.score=res.user.score;
        }
        else{
          this.router.navigate(['/homeParticipant']);
            this.toastr.error('Error');
        }
       
      });
  }

  submit(){
 

    this.QuestionsService.editUser(this.id,this.username,this.password,this.score).subscribe(
        
      res => {
        try{
          if(res.success==true){
            this.router.navigate(['/homeParticipant']);
            this.toastr.success('Success');
           
        }
        else{
          this.toastr.error('Veuiller remplir tout les champs');
        }
        }
        catch(e){
          this.toastr.error('Veuiller remplir tout les champs');
        }
       
      
    }
    
      )
   
  
  
  }

}
