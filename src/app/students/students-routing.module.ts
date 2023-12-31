import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificationsPageComponent } from './pages/califications-page/califications-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { AssistancePageComponent } from './pages/assistance-page/assistance-page.component';

const routes: Routes = [
  {
    path: 'califications-page',
    component: CalificationsPageComponent,
  },
  {
    path: 'assistance-page',
    component: AssistancePageComponent,
  },
  {
    path: 'students-page',
    component: StudentsPageComponent,
  },

  {
    path: '',
    redirectTo: 'students-page',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'students',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
