import { environments } from './../../../environments/environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Student } from '../interfaces/student.interface';
import { Grade } from '../interfaces/grade.interface';
import { Assistance } from '../interfaces/assistance.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  GetStudentById(id: number):Observable<Student> {
    return this.http.get<Student>(`${ this.baseUrl }/api/Student/${id}`);
    }

  GetAllStudents():Observable<Student[]> {
    return this.http.get<Student[]>(`${ this.baseUrl }/api/Student`);
    }

  AddStudent(student: Student):Observable<Student[]>{
    return this.http.post<Student[]>(`${ this.baseUrl }/api/Student`, student);
  }

  ModifyStudent(id: number,student: Student){
    return this.http.put<Student[]>(`${ this.baseUrl }/api/Student/${id}`,student);
  }

  DeleteStudent(id:number){
    return this.http.delete<Student[]>(`${ this.baseUrl }/api/Student/${id}`);
  }

  AddGrade(grade: Grade){
    return this.http.post<Grade[]>(`${ this.baseUrl }/api/Grade/`, grade);
  }

  GetAllGrades(){
    return this.http.get<Grade[]>(`${ this.baseUrl }/api/Grade/`);
  }

  GetStudentGrade(id:number){
    return this.http.get<Grade>(`${ this.baseUrl }/api/Grade/${id}`);
  }

  ModifyGrade(id:number, grade: Grade){
    return this.http.put<Grade[]>(`${ this.baseUrl }/api/Grade/${id}`,grade);
  }

  GetAllAssistances(){
    return this.http.get<Assistance[]>(`${ this.baseUrl }/api/Assistance/`);
  }

  AddAssistance(assistance: Assistance){
    return this.http.post<Assistance[]>(`${ this.baseUrl }/api/Assistance/`, assistance)
      .pipe(
        catchError((err) => {
          return of('error')
        })
      )
  }

  ModifyAssistance(id:number, assistance: any){
    return this.http.put<Assistance[]>(`${ this.baseUrl }/api/Assistance/${id}`, assistance)
  }

}
