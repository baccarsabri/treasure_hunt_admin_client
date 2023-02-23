import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  url:string;

  constructor(private http:HttpClient)  {
    this.url=environment.backendurl;
   }
   questions():Observable<any>{
    return this.http.get(this.url+'api/question/Questions');
  };
  addQuestion(label:string,r1:string,r2:string,r3:string,r4:string,correct_answer:string,time:number,image:string,points:number):Observable<any>{
    return this.http.post(this.url+'api/question/addQuestion', 
     {
      label,r1,r2,r3,r4,correct_answer,time,image,points
     }
    )
  }
  editQuestion(label:string,r1:string,r2:string,r3:string,r4:string,correct_answer:string,time:number,points:number,id:any):Observable<any>{
    return this.http.put(this.url+'api/question/edit', 
     {
      id,label,r1,r2,r3,r4,correct_answer,time,points
     }
    )
  }
  questionById(id:any):Observable<any>{
    return this.http.get(this.url+'api/question/'+id);
  };
  deleteQuestion(id:any):Observable<any>{
    return this.http.delete(this.url+'api/question/delete/'+id, 
     
    )
  };
  usersSorted():Observable<any>{
    return this.http.get(this.url+'api/user/users');
  };

  editUser(id:any,username:string,password:string,score:string):Observable<any>{
    return this.http.put(this.url+'api/user/edit', 
     {
      id,username,password,score
     }
    )
  }

  userById(id:any):Observable<any>{
    return this.http.get(this.url+'api/user/get/'+id);
  };

}
