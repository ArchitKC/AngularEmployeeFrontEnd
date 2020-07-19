import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';
import { Department } from '../models/departments';
import { DepartmentComponent } from '../department/department.component';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  formData : DepartmentComponent;
  readonly baseURl = "http://localhost:53140/api/";

  getDepartmentList(): Observable<Department[]>{
    return this.http.get<Department[]>(this.baseURl + "department")
  }

  addDepartment(dep:Department){
    return this.http.post(this.baseURl+'Department', dep)
  }

  deleteDepartment(id: number){
    return this.http.delete(this.baseURl+'department/'+id);
  }

  updateDepartment(dep:DepartmentComponent) {
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
