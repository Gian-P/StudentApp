import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { CalificationsPageComponent } from './pages/califications-page/califications-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from './components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ModifyComponent } from './components/modify/modify.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { GradesFormComponent } from './components/grades-form/grades-form.component';
import { AssistanceTableComponent } from './components/assistance-table/assistance-table.component';
import { AssistancePageComponent } from './pages/assistance-page/assistance-page.component';
import { AssistanceFormComponent } from './components/assistance-form/assistance-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditAssistanceFormComponent } from './components/edit-assistance-form/edit-assistance-form.component';

@NgModule({
  declarations: [
    CalificationsPageComponent,
    StudentsPageComponent,
    RegisterComponent,
    ModifyComponent,
    StudentsTableComponent,
    GradesTableComponent,
    GradesFormComponent,
    AssistanceTableComponent,
    AssistancePageComponent,
    AssistanceFormComponent,
    EditAssistanceFormComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class StudentsModule { }
