import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule,
    CommonModule
  ]
})
export class MaterialModule {}
