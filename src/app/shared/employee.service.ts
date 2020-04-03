import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import { DatePipe } from "@angular/common";
import * as _ from "lodash";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(
    private firebase: AngularFireDatabase,
    private datePipe: DatePipe
  ) {}

  employeesList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    mobile: new FormControl("", [Validators.required, Validators.minLength(8)]),
    city: new FormControl(""),
    gender: new FormControl("1"),
    department: new FormControl(0),
    hireDate: new FormControl(""),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      gender: "1",
      department: 0,
      hireDate: "",
      isPermanent: false
    });
  }

  getEmployees() {
    this.employeesList = this.firebase.list("employees");
    return this.employeesList.snapshotChanges();
  }

  insertEmployee(employee) {
    if (this.employeesList == null) {
      this.employeesList = this.employeesList;
    }
    this.employeesList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate:
        employee.hireDate == ""
          ? ""
          : this.datePipe.transform(employee.hireDate, "yyyy-MM-dd"),
      isPermanent: employee.isPermanent
    });
  }

  updateEmployee(employee) {
    this.employeesList.update(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate:
        employee.hireDate == ""
          ? ""
          : this.datePipe.transform(employee.hireDate, "yyyy-MM-dd"),
      isPermanent: employee.isPermanent
    });
  }

  deleteEmployee($key: string) {
    this.employeesList.remove($key);
  }

  populateForm(employee) {
    this.form.setValue(_.omit(employee, "departmentName"));
  }
}
