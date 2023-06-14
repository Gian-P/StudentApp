import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { GradesFormComponent } from '../../components/grades-form/grades-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../interfaces/student.interface';
import { studentGrade } from '../../interfaces/student-grade.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.css']
})
export class GradesTableComponent implements OnChanges, OnDestroy {
  studentsGrades: studentGrade[] = [];
  @Input() students: Student[] = [];

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    private router: Router,
    ) {}

  ngOnDestroy(): void {
    localStorage.clear();
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.students.forEach( (student, index )=> {
      this.studentService.GetStudentGrade(student.id)
        .subscribe((StudentGrade) => {

          if(!StudentGrade){

            this.studentsGrades.push({
              id: 0,
              Spanish_Grade:0 ,
              History_Grade: 0,
              Math_Grade: 0,
              Biology_Grade: 0,
              studentName: student.name,
              studentId: student.id
            })
            this.studentsGrades = [...this.studentsGrades];
            this.sortArray();
            return;
          }

          this.studentsGrades.push({
            id: StudentGrade.id!,
            Spanish_Grade: StudentGrade.spanish_Grade,
            History_Grade: StudentGrade.history_Grade,
            Math_Grade: StudentGrade.math_Grade,
            Biology_Grade: StudentGrade.biology_Grade,
            studentName: student.name,
            studentId: student.id
          })
          this.studentsGrades = [...this.studentsGrades];
          this.sortArray();
        })
    });
  }

  displayedColumns: string[] = ['id','Estudiante','Español','Sociales','Matemáticas','Naturales', 'Promedio', 'Opciones'];

  openDialog(subject: string, index:number): void {

    //if(this.studentsGrades[index].id !== 0) return;

    const dialogRef = this.dialog.open(GradesFormComponent, {
      data: {
        index: index,
        subject: subject,
        StudentId: this.studentsGrades[index].studentId
      },
    })

    dialogRef.afterClosed().subscribe((resp) => {

      if(!resp) return;

      const index = JSON.parse(localStorage.getItem('index') || '');

     this.studentsGrades[index] = {...this.studentsGrades[index], ...resp};
     this.studentsGrades = [...this.studentsGrades];

    });
  }

  addGrade(index:number){
    if(this.studentsGrades[index].id !== 0) return;

    const grade: any = {
      Spanish_Grade: this.studentsGrades[index].Spanish_Grade,
      History_Grade: this.studentsGrades[index].History_Grade,
      Math_Grade: this.studentsGrades[index].Math_Grade,
      Biology_Grade: this.studentsGrades[index].Biology_Grade,
      studentId: this.studentsGrades[index].studentId
    }

    Swal.fire({
      title: 'Estás seguro?',
      text: 'Está a punto de agregar la nota.',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'No, no la agregues.',
      confirmButtonText: 'Si, agregala.',
    }).then((result) => {
      if(result.isConfirmed){
        this.studentService.AddGrade(grade)
          .subscribe((resp) => {
            Swal.fire('Agregado!', 'La calificación ha sido agregada correctamente.', 'success');
            this.router.navigate(['students-page']);
          })
        return;
      }
    });
  }

  calculateLiteral(grade:number){

    if(grade >= 0 && grade <= 69){
      return `${grade}/F`
    }

    if(grade >= 70 && grade <= 79){
      return `${grade}/C`
    }

    else if(grade >= 80 && grade <= 89){
      return `${grade}/B`
    }

    else{
      return `${grade}/A`
    }
  }

  modifyGrade(index:number){
    if(this.studentsGrades[index].id === 0) return;

    const grade: any = {
      Spanish_Grade: this.studentsGrades[index].Spanish_Grade,
      History_Grade: this.studentsGrades[index].History_Grade,
      Math_Grade: this.studentsGrades[index].Math_Grade,
      Biology_Grade: this.studentsGrades[index].Biology_Grade,
      studentId: this.studentsGrades[index].studentId
    }

    Swal.fire({
      title: 'Estás seguro?',
      text: 'Está a punto de modificar la nota.',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'No, no la modifiques.',
      confirmButtonText: 'Sí, modifícala.',
    }).then((result) => {
      if(result.isConfirmed){
        this.studentService.ModifyGrade(this.studentsGrades[index].id,grade)
          .subscribe((resp) => {
            Swal.fire('Nota modificada!', 'La nota ha sido modificada correctamente.', 'success');
            this.router.navigate(['students-page']);
          })
        return;
      }
    });
  }

  calculateAverage(index:number){
    return Math.round((this.studentsGrades[index].Biology_Grade + this.studentsGrades[index].History_Grade + this.studentsGrades[index].Math_Grade + this.studentsGrades[index].Spanish_Grade) / 4)
  }

  sortArray(){
    const test = this.studentsGrades.sort(function(a,b){
      return a.id - b.id
    })
  }

}
