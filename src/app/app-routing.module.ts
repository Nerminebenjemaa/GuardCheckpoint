import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HiredCvComponent } from './components/hired-cv/hired-cv.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  
  {
    path:'header', component: HeaderComponent

  },

  {
    path:'list', component: ListComponent

  },

  {
    path:'hiredcv', component: HiredCvComponent

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
