import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
import { Employees } from '../models/employees';
import { EmployeeComponent } from '../employee/employee.component';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http:HttpClient
  ) { }

  formData : EmployeeComponent;
  readonly baseURl = "http://localhost:53140/api/";

  getDepartmentList(): Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseURl + "department")
  }

  addDepartment(dep:Employees){
    return this.http.post(this.baseURl+'Department', dep)
  }

  deleteDepartment(id: number){
    return this.http.delete(this.baseURl+'department/'+id);
  }

  updateDepartment(dep:EmployeeComponent) {
    return this.http.put(this.baseURl+'department',dep);
  }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
