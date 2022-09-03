import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeserviceService } from '../officeservice.service';

@Component({
  selector: 'app-officeregister',
  templateUrl: './officeregister.component.html',
  styleUrls: ['./officeregister.component.css'],
})
export class OfficeregisterComponent implements OnInit {
  registerForm!: FormGroup;

  submitted: boolean = false;
  userEditFlag: boolean = false;

  displayAll: any = [];
  departmentDropArr: any[] = [];
  stateDropArr: any[] = [];
  divisionDropArr: any[] = [];
  districtDropArr: any[] = [];

  constructor(private fb: FormBuilder, private oservice: OfficeserviceService) {
    this.registerForm = this.fb.group({
      id: [''],
      organizationId: ['0'],
      name: ['', Validators.required],
      address: [''],
      stateId: ['0'],
      divisionId: ['0'],
      districtId: ['0'],
      contactPersonName: [''],
      mobileNo: [''],
      landlineNo: [''],
      createdBy: 1,
      emailId: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      userEditFlag: false,
    });
  }

  ngOnInit(): void {
    this.displayAllData();
    this.displayDepartmentDrop();
    this.displayStateDrop();
    // this.displayDivisionDrop();
    // this.displayDistrictDrop();
  }

  //method to display list of data in table
  displayAllData() {
    this.oservice.getAllData().subscribe((a_data: any) => {
      this.displayAll = a_data.responseData.data;
      console.log(this.displayAll);
    });
  }

  //method to submit data
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      let formdata = this.registerForm.value;

      let obj = {
        id: +formdata.id,
        organizationId: +formdata.organizationId,
        name: formdata.name,
        address: formdata.address,
        stateId: +formdata.stateId,
        divisionId: +formdata.divisionId,
        districtId: +formdata.districtId,
        contactPersonName: formdata.contactPersonName,
        mobileNo: formdata.mobileNo,
        landlineNo: formdata.landlineNo,
        createdBy: 1,
        emailId: formdata.emailId,
        flag: 'i',
      };

      // let finalData = JSON.stringify(obj);----------> unsupported-media-type-angular-4-post error

      this.oservice.submitAllData(obj).subscribe((res: any) => {
        if (res.statusCode == '200') {
          this.registerForm.reset();
          this.displayAllData();
          this.submitted = false;
          this.userEditFlag = false;
        }
      });
    }
  }

  //method to edit data
  onEdit(editId: any) {
    this.userEditFlag = true;
    const editData = this.displayAll.find((x: any) => x.id === editId);

    this.registerForm.patchValue({
      id: +editData.id,
      organizationId: +editData.organizationId,
      name: editData.name,
      address: editData.address,
      stateId: +editData.stateId,
      divisionId: +editData.divisionId,
      districtId: +editData.districtId,
      contactPersonName: editData.contactPersonName,
      mobileNo: editData.mobileNo,
      landlineNo: editData.landlineNo,
      createdBy: 1,
      emailId: editData.emailId,
    });
    this.displayStateDrop();
  }

  //method to update data
  updateUser() {
    if (this.registerForm.invalid) {
      return;
    } else {
      let formdata = this.registerForm.value;

      let obj = {
        id: +formdata.id,
        organizationId: +formdata.organizationId,
        name: formdata.name,
        address: formdata.address,
        stateId: +formdata.stateId,
        divisionId: +formdata.divisionId,
        districtId: +formdata.districtId,
        contactPersonName: formdata.contactPersonName,
        mobileNo: formdata.mobileNo,
        landlineNo: formdata.landlineNo,
        createdBy: 1,
        emailId: formdata.emailId,
        flag: 'u',
      };

      this.oservice.submitAllData(obj).subscribe((u_data: any) => {
        if ((u_data.statusCode = '200')) {
          this.registerForm.reset();
          this.displayAllData();
          this.submitted = false;
          this.userEditFlag = false;
        }
      });
    }
  }

  //method to get department dropdown data
  displayDepartmentDrop() {
    this.oservice.getDepartmentDropdown().subscribe((d_data: any) => {
      this.departmentDropArr = d_data.responseData;
    });
  }

  displayStateDrop() {
    this.oservice.getStateDropdown().subscribe((s_data: any) => {
      this.stateDropArr = s_data.responseData;

      this.userEditFlag
        ? this.displayDivisionDrop(this.f['stateId'].value)
        : '';
    });
  }

  displayDivisionDrop(sid: any) {
    this.oservice.getDivisionDropdown(sid).subscribe((di_data: any) => {
      this.divisionDropArr = di_data.responseData;

      this.userEditFlag
        ? this.displayDistrictDrop(this.f['divisionId'].value)
        : '';
    });
  }

  displayDistrictDrop(did: any) {
    this.oservice.getDistrictDropdown(did).subscribe((dt_data: any) => {
      this.districtDropArr = dt_data.responseData;
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onClear() {
    this.registerForm.reset();
    this.submitted = false;
    this.userEditFlag = false;
  }
}
