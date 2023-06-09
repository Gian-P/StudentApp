import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../interfaces/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../components/register/register.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  public students: Student[] = [];

  public isLoading: boolean = true;

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.studentService.getAllStudents()
      .subscribe((students) => {
        this.students = students;
        this.isLoading = false;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent)

    dialogRef.afterClosed().subscribe((resp) => {
      if(!resp) return;
      this.students = resp;
    });
  }


}
