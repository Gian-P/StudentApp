import { environments } from './../../../environments/environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, debounce, debounceTime, tap } from 'rxjs';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getAllStudents():Observable<Student[]> {
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

}
