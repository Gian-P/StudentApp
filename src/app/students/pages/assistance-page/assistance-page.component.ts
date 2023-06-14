import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Assistance } from '../../interfaces/assistance.interface';
import { MatDialog } from '@angular/material/dialog';
import { AssistanceFormComponent } from '../../components/assistance-form/assistance-form.component';

@Component({
  selector: 'app-assistance-page',
  templateUrl: './assistance-page.component.html',
  styleUrls: ['./assistance-page.component.css']
})
export class AssistancePageComponent {

  public assistances: Assistance[] = [];

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
      this.studentService.GetAllAssistances()
        .subscribe((assistances) => {
          this.assistances = assistances;
        });
    }

    openDialog(): void {

      const dialogRef = this.dialog.open(AssistanceFormComponent)

      dialogRef.afterClosed().subscribe((resp) => {
        if(!resp) return;
        this.assistances = resp;
      });
    }



}
