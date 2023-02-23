import { QuestionsService } from './../service/questions.service';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-participant',
  templateUrl: './home-participant.component.html',
  styleUrls: ['./home-participant.component.css']
})
export class HomeParticipantComponent implements OnInit {

  constructor(private QuestionsService:QuestionsService) { }
  users:any;

  ngOnInit(): void {
    this.QuestionsService.usersSorted().subscribe(
        
      res => {
       
        
         
          this.users=res.users
  
    
      }
      

    );
  }

}
