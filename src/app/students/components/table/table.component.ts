import { Component, Input } from '@angular/core';
import { Student } from '../../interfaces/student.interface'
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { ModifyComponent } from '../../components/modify/modify.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() students: Student[] = [] ;

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    ) {}

  displayedColumns: string[] = ['id', 'nombre', 'primer_apellido', 'telefono', 'email', 'genero', 'opciones'];

  openDialog(event: any): void {
    const dialogRef = this.dialog.open(ModifyComponent,{
      data: { id: event.target.id }
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if(!resp) return;
      this.students = resp;
    });
  }

  deleteStudent(event: any){
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Este proceso es irreversible.',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'No, no lo elimines.',
      confirmButtonText: 'Si, eliminalo.',
    }).then((result) => {

      if(result.isConfirmed){
        this.studentService.DeleteStudent(event.target.id)
        .subscribe((resp) => {
          Swal.fire('Removido!', 'El estudiante fue removido exitosamente.', 'success');
          this.students = resp;
        })
        return;
      }
    });
  }
}
