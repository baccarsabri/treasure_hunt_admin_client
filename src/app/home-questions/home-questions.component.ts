import { Router } from '@angular/router';
import { QuestionsService } from './../service/questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-questions',
  templateUrl: './home-questions.component.html',
  styleUrls: ['./home-questions.component.css']
})
export class HomeQuestionsComponent implements OnInit {

  questions:any;

  constructor(private QuestionsService:QuestionsService , private router:Router) { }

  ngOnInit(): void {

    this.QuestionsService.questions().subscribe(
        
      res => {
       
        
         
          this.questions=res.q
  
    
      }
      

    );
  }
  confirm(id:any){
    var a = document.getElementById("id");
    let b = confirm("vous etes sure de vouloir supprimer Cette Question !")
    if (b){
      
      this.QuestionsService.deleteQuestion(id).subscribe( res=>{});
      this.router.navigate(['/homeQuestions']).then(() => {
        window.location.reload();
      });;
    }
    else
    this.router.navigate(['/homeQuestions']);
  }

}
