import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Assistance } from '../../interfaces/assistance.interface';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditAssistanceFormComponent } from '../edit-assistance-form/edit-assistance-form.component';

@Component({
  selector: 'shared-assistance-table',
  templateUrl: './assistance-table.component.html',
  styleUrls: ['./assistance-table.component.css']
})
export class AssistanceTableComponent implements OnChanges {
  @Input() assistances: Assistance[] = [];

  displayedColumns: string[] = ['id','Estudiante','Fecha','Asistencia español','Asistencia sociales','Asistencia Matemáticas','Asistencia naturales', 'Opciones'];

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    private router: Router,
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTable()
  }

  sortDates(){
    this.assistances.sort(function(a,b){
      const [day1, month1, year1] = a.date.split('/');
      const [day2, month2, year2] = b.date.split('/');

      const date1 = new Date(`${year1}-${month1}-${day1}`);
      const date2 = new Date(`${year2}-${month2}-${day2}`);

      return date1.getDate() - date2.getDate()
    })
  }


  openDialog(index:number): void {
    const dialogRef = this.dialog.open(EditAssistanceFormComponent, {
      data: {
        index: index,
        assistanceId: this.assistances[index].id
      }
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if(!resp) return;
      this.assistances = resp;
      this.updateTable();
    });
  }

  updateTable(){
    this.sortDates();
    this.assistances.forEach((assistance, index) => {
      this.studentService.GetStudentById(assistance.studentId)
        .subscribe((student) => {
          this.assistances[index].StudentName = student.name;
        })
    });

  }


}
