import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HiredCvComponent } from './components/hired-cv/hired-cv.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { ExampleGuard } from './guards/example.guard';
import { LoginGuard } from './guards/login.guard';
import { NotLoggedGuard } from './guards/not-logged.guard';

const routes: Routes = [


  {
    path:'login', component: LoginComponent , canActivate:[NotLoggedGuard]

  },


  {
    path:'add-cv', component: AddCvComponent , canActivate:[LoginGuard]
  },

  {
    path:'hiredcv', component: HiredCvComponent , canActivate:[ExampleGuard]

  },

  {
    path:'cv', component: CvComponent

  },

  {
    path:'**', component: CvComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
