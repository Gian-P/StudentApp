import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent implements OnInit {

  public gradeObj: any;

  public grades_form: FormGroup = this.fb.group({
    First_Exam: ['',[Validators.required,Validators.min(0)]],
    Second_Exam: ['',[Validators.required,Validators.min(0)]],
    Final_Exam: ['',[Validators.required,Validators.min(0)]],
    Participation: ['',[Validators.required, Validators.min(0)]],
  })

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<GradesFormComponent>,
    private studentService: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: {
      index: number,
      subject: string,
      StudentId: number
    }
    ) {}

  ngOnInit(): void {
    localStorage.setItem('index',this.data.index.toString());
  }


    closeDialog(){
      this.dialogRef.close();
    }

    onSubmit(){

     if(this.grades_form.invalid) {
        Swal.fire('','Uno de los campos no ha sido debidamente completado, porfavor revisar.','error');
        return;
      };

      const FormValues = {...this.grades_form.value};

      const TotalGrade = Number(FormValues.First_Exam) + Number(FormValues.Second_Exam) + Number(FormValues.Final_Exam) + Number(FormValues.Participation);

      if(TotalGrade > 100) {
        Swal.fire('','La calificación no puede ser mayor a 100, porfavor revisar.','error');
        return;
      }

      this.gradeObj = {
        ...this.gradeObj,
        [this.data.subject]: TotalGrade
      }

      this.dialogRef.close(this.gradeObj);

    }
}
