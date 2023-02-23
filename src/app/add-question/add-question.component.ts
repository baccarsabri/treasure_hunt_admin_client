import { Router } from '@angular/router';
import { QuestionsService } from './../service/questions.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
const URL = environment.backendurl+'api/upload';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {
  
 
  urll:string;
  label:string="";
  r1:string="";
  r2:string="";
  r3:string="";
  r4:string="";
  correct_answer:string="";
  time:number=0;
  points:number=0;

  
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });

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
   
    console.log(this.correct_answer) }

 
  constructor(private toastr: ToastrService,private QuestionsService:QuestionsService , private router:Router) {
    this.urll=environment.backendurl;
  
  }
  ngOnInit() {
   
    
     
      this.uploader.onAfterAddingFile = (file) => {
      
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem = (item: any, status: any) => {
        this.QuestionsService.addQuestion(this.label,this.r1,this.r2,this.r3,this.r4,this.correct_answer,this.time,item._file.name,this.points).subscribe(
          
          res => {
            try{
              if(this.label.length==0){
                this.toastr.error('Veuiller remplir le libelle de la question');
              }
              else{
                if(this.r1.length==0){
                  this.toastr.error('Veuiller remplir les repenses');
                }
                else{
                  if(this.r2.length==0){
                    this.toastr.error('Veuiller remplir les repenses');
                  }
                  else{
                   if(this.correct_answer.length==0){
                    this.toastr.error('Veuiller choisir la repense correct');
                   }
                   else{
                    if(this.time==0)
                    {
                      this.toastr.error('time ne peut pas etre 0 ');
                    }
                    else{
                      if(this.points==0){
                        this.toastr.error('points ne peut pas etre 0 ');
                
                      }else{
                        if(res.success==true){
                          this.router.navigate(['/home']);
                         
                      }
                      else{
                        this.toastr.warning('Veuiller remplir tout les champs');
                      }
                      }
                              
                    }

                   }
                  }
                }
              }
           
            }

            catch(e){
              this.toastr.warning('Veuiller remplir tout les champs');
            }
            
            
          })
          this.toastr.success('question ajouter avec succés');
        
      }
   
   
  
  }
  submit(){
   
  
      
        if(this.uploader?.queue?.length!=0){
          if(this.label.length==0){
            this.toastr.error('Veuiller remplir le libelle de la question');
          }
          else{
            if(this.r1.length==0){
              this.toastr.error('Veuiller remplir les repenses');
            }
            else{
              if(this.r2.length==0){
                this.toastr.error('Veuiller remplir les repenses');
              }
              else{
               
               
                if(this.time==0)
                {
                  this.toastr.error('time ne peut pas etre 0 ');
                }
                else{
                  if(this.points==0){
                    this.toastr.error('points ne peut pas etre 0 ');
            
                  }else{
                    if(this.correct_answer.length==0){
                      this.toastr.error('Veuiller choisir la repense correct');
                     }else{
                      
                   
                      this.uploader.uploadAll()
          this.router.navigate(['/home']);
                    
                     }
                  
                  
                  }
                          
                }

               
              }
            }
          }
          
        }
        else{
          this.QuestionsService.addQuestion(this.label,this.r1,this.r2,this.r3,this.r4,this.correct_answer,this.time,"",this.points).subscribe(
              
            res => {
             
              if(this.label.length==0){
                this.toastr.error('Veuiller remplir le libelle de la question');
              }
              else{
                if(this.r1.length==0){
                  this.toastr.error('Veuiller remplir les repenses');
                }
                else{
                  if(this.r2.length==0){
                    this.toastr.error('Veuiller remplir les repenses');
                  }
                  else{
                   
                   
                    if(this.time==0)
                    {
                      this.toastr.error('time ne peut pas etre 0 ');
                    }
                    else{
                      if(this.points==0){
                        this.toastr.error('points ne peut pas etre 0 ');
                
                      }else{
                        if(this.correct_answer.length==0){
                          this.toastr.error('Veuiller choisir la repense correct');
                         }else{
                          if(res.success==true){
                            this.router.navigate(['/home']);
                           
                        }
                        else{
                          this.toastr.error('Server Error');
                        }
                         }
                      
                      
                      }
                              
                    }

                   
                  }
                }
              }
              try{
                if(res.success==true){
                  this.router.navigate(['/homeQuestions']);
                  this.toastr.success('question ajouter avec succés');
                 
              }
              else{
        
              }
              }
              catch(e){
                
              }
             
            
          }
          
            )
         
        }
      
    
   
   
    
    }
  

}
