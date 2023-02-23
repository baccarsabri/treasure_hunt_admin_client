import { EditUserComponent } from './edit-user/edit-user.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { HomeParticipantComponent } from './home-participant/home-participant.component';
import { HomeQuestionsComponent } from './home-questions/home-questions.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../app/service/guard.service';
const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: 'login',
    component:LoginComponent
    
  },
  {
    path: 'home',
    component:HomeComponent,
    canActivate:[GuardService]
    
  },
  {
    path: 'homeQuestions',
    component:HomeQuestionsComponent,
    canActivate:[GuardService]
    
  },
  {
    path: 'homeParticipant',
    component:HomeParticipantComponent,
    canActivate:[GuardService]
    
  },
  {
    path: 'addQuestion',
    component:AddQuestionComponent,
    canActivate:[GuardService]
    
  },
  {
    path: 'edit/:id',
    component:EditQuestionComponent,
    canActivate:[GuardService]
    
  },
  {
    path: 'profil',
    component:EditAdminComponent,
    canActivate:[GuardService]
    
  },
  {
    path: 'editUser/:id',
    component:EditUserComponent,
    canActivate:[GuardService]
    
  },
  {
    path: '**', pathMatch: 'full',
    component:HomeComponent,
    canActivate:[GuardService]
    
  },

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
