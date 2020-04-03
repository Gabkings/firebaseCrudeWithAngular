import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employees/employee/employee.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";
import { EmployeeService } from "./shared/employee.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { DatePipe } from "@angular/common";
import { DepartmentsService } from "./shared/departments.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    MatDialogModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatPaginatorModule,
    CommonModule,
    MatButtonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  entryComponents: [EmployeeComponent],
  providers: [EmployeeService, DatePipe, DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
