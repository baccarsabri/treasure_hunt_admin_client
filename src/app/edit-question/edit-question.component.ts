import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from './../service/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  id:any=this.ActivatedRoute.snapshot.params['id'];
  label:string="";
  r1:string="";
  r2="";
  r3="";
  r4="";
  correct_answer="";
  time=0;
  points=0;
  checked1=false;
  checked2=false;
  checked3=false;
  checked4=false;
   

  constructor(private toastr: ToastrService, private QuestionsService:QuestionsService, private router:Router , private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.QuestionsService.questionById(this.id).subscribe(
      res => {
        if(res.success==true){
          this.label=res.q[0].label;
          this.r1=res.q[0].r1;
          this.r2=res.q[0].r2;
          this.r3=res.q[0].r3;
          this.r4=res.q[0].r4;
          this.correct_answer=res.q[0].correct_answer;
          this.time=res.q[0].time;
          this.points=res.q[0].points;



          switch(this.correct_answer){
            case this.r1 : {
              console.log(this.correct_answer,"++",this.r1)
              this.checked1=true;
        
              break;
            }
            case this.r2 : {
              this.checked2=true;
              break;
            }
            case this.r3:{
              this.checked3=true;
              break;
            }
            case this.r4:{
              this.checked4=true;
              break;
            }
          }
        }
        else{
          this.router.navigate(['/homeQuestions']);
          this.toastr.error('Error');
        }
       
  });
  
 
  }


  
onItemChange(e:any){
  switch(e.target.value){
    case "1" : {
      this.correct_answer=this.r1
      break;
    }
    case "2" : {
      this.correct_answer=this.r2
      break;
    }
    case "3":{
      this.correct_answer=this.r3
      break;
    }
    case "4":{
      this.correct_answer=this.r4
      break;
    }
  }
}

submit(){
 

    this.QuestionsService.editQuestion(this.label,this.r1,this.r2,this.r3,this.r4,this.correct_answer,this.time,this.points,this.id).subscribe(
        
      res => {
        try{
          if(res.success==true){
            this.router.navigate(['/homeQuestions']);
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
