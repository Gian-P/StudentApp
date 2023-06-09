import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModifyComponent>,
    private studentService: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
    ) {}

  public modify_student: FormGroup = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    first_Name: ['',[Validators.required,Validators.minLength(3)]],
    telephone_Number: ['',[Validators.required,Validators.minLength(10)]],
    email: ['',[Validators.required, Validators.email ]],
    gender: ['',[Validators.required]],
  })

  onSubmit(){
    if(this.modify_student.invalid) {
      Swal.fire('','Uno de los campos no ha sido debidamente completado, porfavor revisar.','error');
      return;
    };
    const student ={...this.modify_student.value};
    this.studentService.ModifyStudent(this.data.id,student)
    .subscribe((resp) => {
      Swal.fire('','El registro se ha modificado correctamente','success');
      this.dialogRef.close(resp);
    });
  }


  closeDialog(){
    this.dialogRef.close();
  }

}
