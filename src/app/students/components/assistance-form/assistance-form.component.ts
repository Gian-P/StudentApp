import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assistance-form',
  templateUrl: './assistance-form.component.html',
  styleUrls: ['./assistance-form.component.css']
})
export class AssistanceFormComponent {

  assistanceEstatus: string[] = ['P','A','E','N/A']

  public assistance_form: FormGroup = this.fb.group({
    StudentId: ['',[Validators.required,Validators.min(1)]],
    Date: ['',[Validators.required]],
    Spanish_Assistance: ['',[Validators.required]],
    Mathematics_Assistance: ['',[Validators.required]],
    History_Assistance: ['',[Validators.required]],
    Biology_Assistance: ['',[Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AssistanceFormComponent>,
    private studentService: StudentsService,
    ) {}

    onSubmit(){

      if(this.assistance_form.invalid) {
        Swal.fire('','Uno de los campos no ha sido debidamente completado, porfavor revisar.','error');
        return;
      };

      this.assistance_form.value.Date = this.assistance_form.value.Date.toLocaleString().split(',')[0];
      this.assistance_form.value.StudentId = Number(this.assistance_form.value.StudentId);

      const assistanceObj = {...this.assistance_form.value}

      this.studentService.AddAssistance(assistanceObj)
        .subscribe((resp) => {
          if(resp === 'error'){
            Swal.fire('','Porfavor revisar si el estudiante que esta ingresando existe o si ya le habia asignado una asistencia al mismo en la fecha que esta ingresando.','error');
            return;
          }

          Swal.fire('','La asistencia se ha agregado correctamente.','success');
          this.dialogRef.close(resp);
        });

    }

    closeDialog(){
      this.dialogRef.close();
    }
}
