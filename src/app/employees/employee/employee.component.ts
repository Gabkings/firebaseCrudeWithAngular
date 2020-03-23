import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { DepartmentsService } from "../../shared/departments.service";
import { NotificationsService } from "../../shared/notifications.service";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  constructor(
    public service: EmployeeService,
    public departmentService: DepartmentsService,
    private notificationService: NotificationsService
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
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(":: Submitted successfully");
    }
  }
}
