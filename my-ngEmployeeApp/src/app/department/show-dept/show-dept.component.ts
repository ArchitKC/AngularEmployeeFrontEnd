import { Component, OnInit, ViewChild} from '@angular/core'; 
import {MatTableDataSource} from '@angular/material/table';   
import {MatSort} from '@angular/material/sort';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { DepartmentComponent } from '../department.component';
import {DepartmentService} from '../../services/department.service';
import {AddDeptComponent} from '../add-dept/add-dept.component';  

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent  implements OnInit {

  constructor(
    private service:DepartmentService,
    private dialog:MatDialog){}

   
  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['Options','DepartmentID', 'DepartmentName']
 
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() { 
    this.loadDummyData();
  }

  onEdit(dep: DepartmentComponent){
    console.log(dep);
  }

  onDelete(id: number){
      console.log(id);
  }

  loadDummyData(){ 
    this.service.getDepartmentList().subscribe(data=>{
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filterValue :string){
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  onLoadView(){
    const dialogAdd = new MatDialogConfig();
    dialogAdd.disableClose= true;
    dialogAdd.autoFocus= true;
    dialogAdd.width = "75%";
    this.dialog.open(AddDeptComponent,dialogAdd);
    console.log("Button Clicked");
  }

}

 