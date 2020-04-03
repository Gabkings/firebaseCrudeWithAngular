import { NotificationsService } from "./../../shared/notifications.service";
import { EmployeeComponent } from "./../employee/employee.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DepartmentsService } from "src/app/shared/departments.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private departmentService: DepartmentsService,
    private dialog: MatDialog,
    private notificationsService: NotificationsService
  ) {}

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    "fullName",
    "email",
    "mobile",
    "city",
    "departmentName",
    "actions"
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getEmployees().subscribe(list => {
      let array = list.map(item => {
        let departmentName = this.departmentService.getDepartmentName(
          item.payload.val()["department"]
        );
        console.log(departmentName);
        return {
          $key: item.key,
          departmentName,
          ...item.payload.val()
        };
      });

      this.listData = new MatTableDataSource(array);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(ele => {
          return (
            ele != "actions" && data[ele].toLowerCase().indexOf(filter) != -1
          );
        });
      };
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onClick() {
    this.service.initializeFormGroup();
    const modalConfig = new MatDialogConfig();
    modalConfig.autoFocus = true;
    modalConfig.width = "60%";
    modalConfig.disableClose = true;
    this.dialog.open(EmployeeComponent, modalConfig);
  }

  editClick(row) {
    this.service.populateForm(row);
    const modalConfig = new MatDialogConfig();
    modalConfig.autoFocus = true;
    modalConfig.width = "60%";
    modalConfig.disableClose = true;
    this.dialog.open(EmployeeComponent, modalConfig);
  }

  delClick(row) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.deleteEmployee(row);
      this.notificationsService.warn("! Deleted successfully");
    }
  }
}
