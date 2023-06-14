import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../interfaces/student.interface';


@Component({
  selector: 'app-califications-page',
  templateUrl: './califications-page.component.html',
  styleUrls: ['./califications-page.component.css']
})
export class CalificationsPageComponent implements OnInit {

  public students: Student[] = [];

  constructor(
    private studentService: StudentsService,
    ) {}

    ngOnInit(): void {
      this.studentService.GetAllStudents()
        .subscribe((students) => {
          this.students = students;
        });
    }

}
