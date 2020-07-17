import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DepartmentModel } from '../models/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  readonly baseURl = "http://localhost:53140/api/";

  getDepartmentList(): Observable<DepartmentModel[]>{
    return this.http.get<DepartmentModel[]>(this.baseURl + "department")
  }
}
