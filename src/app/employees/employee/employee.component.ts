import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { DepartmentsService } from "../../shared/departments.service";
import { NotificationsService } from "../../shared/notifications.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  constructor(
    public service: EmployeeService,
    public departmentService: DepartmentsService,
    private notificationService: NotificationsService,
    public dialog: MatDialogRef<EmployeeComponent>
  ) {}

  ngOnInit(): void {
    this.service.form;
    this.service.getEmployees();
    this.departmentService.array;
  }

  // departments = [
  //   { id: 1, value: "Dep 1" },
  //   { id: 2, value: "Dep 2" },
  //   { id: 3, value: "Dep 3" }
  // ];
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(":: Submitted successfully");
  }
  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get("$key").value) {
        this.service.insertEmployee(this.service.form.value);
      } else {
        this.service.updateEmployee(this.service.form.value);
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(":: Submitted successfully");
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialog.close();
  }
}
