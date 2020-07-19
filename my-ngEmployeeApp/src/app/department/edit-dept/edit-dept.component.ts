import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {

  constructor(
    public dialogbox: MatDialogRef<EditDeptComponent>,
    public service : DepartmentService
  ) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  } 
}
