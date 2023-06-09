import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { CalificationsPageComponent } from './pages/califications-page/califications-page.component';
import { GradesPageComponent } from './pages/grades-page/grades-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { TableComponent } from './components/table/table.component';
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

@NgModule({
  declarations: [
    CalificationsPageComponent,
    GradesPageComponent,
    StudentsPageComponent,
    TableComponent,
    RegisterComponent,
    ModifyComponent
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
    MatProgressSpinnerModule
  ]
})
export class StudentsModule { }
