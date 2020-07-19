import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';
 import { NgForm } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddDeptComponent>,
    private service:DepartmentService,
    private snackBar:MatSnackBar,
    ) { }


  txtName: string= "Test 1";
  ngOnInit() {
    this.resetForm();

  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
   }

  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  } 
  onSubmit(form: NgForm) {
    if(form.value.DepartmentName != "" || form.value.DepartmentName != null
    ||form.value.DepartmentName != ''){
    this.service.addDepartment(form.value).subscribe(res=>
    {
        this.resetForm(form);
        this.snackBar.open('Department is added successfully', '', {
          duration:5000,
          verticalPosition:'top'
        });
        this.service.filter('Register click');
      }); 
    }
    this.dialogbox.close();
    this.service.filter('Register click');
  }
}
