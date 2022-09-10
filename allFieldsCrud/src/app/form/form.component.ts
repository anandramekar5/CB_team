import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  MatBottomSheet,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  editFlag = false;
  newArray: any[] = [];

  gender: any[] = ['male', 'female'];
  cities: any[] = [
    'new york',
    'california',
    'south carolina',
    'texas',
    'austin',
  ];
  qualificationArray: any[] = [
    { id: 1, qname: 'SSC', checked: 'false' },
    { id: 2, qname: 'HSC', checked: 'false' },
    { id: 3, qname: 'BE', checked: 'false' },
    { id: 4, qname: 'MBBS', checked: 'false' },
    { id: 5, qname: 'PHD', checked: 'false' },
    { id: 6, qname: 'MD', checked: 'false' },
  ];
  dataSource: any;
  constructor(
    private fb: FormBuilder,
    private _bottomSheet: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}
  ngOnInit(): void {
    let editData = this.data;
    this.userForm = this.fb.group({
      fname: [editData ? editData.fname : ''],
      lname: [editData ? editData.lname : ''],
      mobile: [editData ? editData.mobile : ''],
      city: [editData ? editData.city : ''],
      gender: [editData ? editData.gender : ''],
      qualification: [editData ? editData.qualification : ''],
    });

    if (editData) {
      this.editFlag = true;
      this.newArray = editData.qualification;

      this.qualificationArray.find((ele: any) => {
        this.newArray.find((item: any) => {
          if (ele.qname == item) {
            ele.checked = true;
          }
        });
      });
    }
  }

  onCheckSelect(data: any, i: number) {
    // console.log(data);
    if (data.checked) {
      this.qualificationArray[i].checked = true;
    } else {
      this.qualificationArray[i].checked = false;
    }
  }

  onFormSubmit() {
    if (!this.editFlag) {
      let obj1 = JSON.parse(localStorage.getItem('userDetails') || '[]');
      let formData = this.userForm.value;
      this.qualificationArray.find((ele: any) => {
        if (ele.checked == true) {
          this.newArray.push(ele.qname);
        }
      });

      this.userForm.value.qualification = this.newArray;
      console.log(this.userForm.value.qualification);

      if (obj1.length) {
        formData.id = obj1.length + 1;
        formData = [formData, ...obj1];
      } else {
        formData.id = 1;
        formData = [formData];
      }

      console.log(formData);

      localStorage.setItem('userDetails', JSON.stringify(formData));
    } else {
      this.newArray = [];
      let storeData = JSON.parse(localStorage.getItem('userDetails') || '');
      let finalList = [...storeData];

      this.qualificationArray.find((ele: any) => {
        if (ele.checked == true) {
          this.newArray.push(ele.qname);
        }
      });

      this.userForm.value.qualification = this.newArray;

      let findIndex = finalList.findIndex((ele: any) => ele.id == this.data.id);

      this.userForm.value.id = this.data.id;
      finalList[findIndex] = this.userForm.value;

      this.editFlag = false;
      localStorage.setItem('userDetails', JSON.stringify(finalList));

      this.getData();
    }
    this._bottomSheet.dismiss('ture');
  }

  getData() {
    let obj = JSON.parse(localStorage.getItem('userDetails') || '');
    this.dataSource = obj;
  }
}
