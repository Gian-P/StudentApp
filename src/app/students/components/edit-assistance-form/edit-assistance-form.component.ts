import { Component, Inject } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-assistance-form',
  templateUrl: './edit-assistance-form.component.html',
  styleUrls: ['./edit-assistance-form.component.css']
})
export class EditAssistanceFormComponent {

  assistanceEstatus: string[] = ['P','A','E','N/A']

  public assistance_edit_form: FormGroup = this.fb.group({
    Spanish_Assistance: ['',[Validators.required]],
    Mathematics_Assistance: ['',[Validators.required]],
    History_Assistance: ['',[Validators.required]],
    Biology_Assistance: ['',[Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditAssistanceFormComponent>,
    private studentService: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: {
      index: number,
      assistanceId: number
    }
    ) {}

    onSubmit(){
      if(this.assistance_edit_form.invalid) {
        Swal.fire('','Uno de los campos no ha sido debidamente completado, porfavor revisar.','error');
        return;
      }

      const assistanceObj = {...this.assistance_edit_form.value}

      this.studentService.ModifyAssistance(this.data.assistanceId, assistanceObj)
        .subscribe((resp) => {
          Swal.fire('','La asistencia se ha modificado correctamente.','success');
          this.dialogRef.close(resp);
        });

    }

    closeDialog(){
      this.dialogRef.close();
    }

}
