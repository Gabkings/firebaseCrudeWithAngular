import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import * as _ from "lodash";
@Injectable({
  providedIn: "root"
})
export class DepartmentsService {
  departmentList: AngularFireList<any>;
  array = [];

  constructor(private firebase: AngularFireDatabase) {
    this.departmentList = this.firebase.list("departments");
    this.departmentList.snapshotChanges().subscribe(list => {
      this.array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  getDepartmentName($key) {
    if ($key == "0") return "";
    else {
      return _.find(this.array, obj => {
        let obe2 = obj.$key == $key;
        return _.values(obe2);
      });
    }
  }
}
