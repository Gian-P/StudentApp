import {  Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public student_form: FormGroup = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    first_Name: ['',[Validators.required,Validators.minLength(3)]],
    telephone_Number: ['',[Validators.required,Validators.minLength(10)]],
    email: ['',[Validators.required, Validators.email ]],
    gender: ['',[Validators.required,  ]],
  })

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private studentService: StudentsService,
    ) {}


  onSubmit(){
    if(this.student_form.invalid) {
      Swal.fire('','Uno de los campos no ha sido debidamente completado, porfavor revisar.','error');
      return;
    };
    const student ={...this.student_form.value};

    this.studentService.AddStudent(student)
    .subscribe((resp) => {
      Swal.fire('','El registro se ha agregado correctamente','success');
      this.dialogRef.close(resp);
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
