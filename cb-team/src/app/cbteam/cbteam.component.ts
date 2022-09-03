import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CbserviceService } from '../cbservice.service';

export interface PeriodicElement {
  srNo: number;
  cbTeamId: string;
  personName: string;
  mobileNo: string;
  emailId: string;
  dob: string;
  address: string;
  city: string;
  state: {
    id: string;
    name: string;
  };
  country: {
    id: string;
    name: string;
  };
  pinCode: string;
  designation: {
    id: string;
    name: string;
  };
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-cbteam',
  templateUrl: './cbteam.component.html',
  styleUrls: ['./cbteam.component.css'],
})
export class CbteamComponent implements OnInit {
  constructor(private serv: CbserviceService, private fb: FormBuilder) {}

  editFlag: boolean = false;
  editObj: any;

  buttonName: string = 'Submit';
  stateDropdown: any[] = [];
  countryDropdown: any[] = [];
  designationDropdown: any[] = [];
  userForm!: FormGroup;
  ngOnInit(): void {
    this.displayAllData();
    this.getStateDropDown();
    this.getCountryDropDown();
    this.getDesignationDropDown();

    this.userForm = this.fb.group({
      cbTeamId: [''],
      personName: ['', Validators.required],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      emailId: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      pinCode: [
        '',
        [
          Validators.required,
          Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$'),
        ],
      ],
      uid: [''],
      state: ['', Validators.required],
      country: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

  displayedColumns: string[] = [
    'srNo',
    'personName',
    'mobileNo',
    'designation',
    'city',
    'dob',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  displayAllData() {
    this.serv.getData().subscribe((res: any) => {
      // console.log(res);
      this.dataSource = res.responseData.data;
      // console.log(res.responseData.data);
    });
  }

  getStateDropDown() {
    this.serv.getStateData().subscribe((s_date: any) => {
      this.stateDropdown = s_date.responseData;
      // console.log(s_date.responseData);
    });
  }

  getCountryDropDown() {
    this.serv.getCountryData().subscribe((c_date: any) => {
      this.countryDropdown = c_date.responseData;
      // console.log(c_date.responseData);
    });
  }

  getDesignationDropDown() {
    this.serv.getDesignationData().subscribe((d_data: any) => {
      this.designationDropdown = d_data.responseData;
    });
  }

  postCbData() {
    if (!this.editFlag) {
      this.buttonName = 'Submit';
      let obj = this.userForm.getRawValue();
      let obj1 = {
        // cbTeamId: this.editObj.cbTeamId,
        createdBy: 'USER202203041214524702060',
        createdDate: new Date(),
        isDeleted: false,
        modifiedBy: '',
        modifiedDate: new Date(),
        personName: obj.personName,
        mobileNo: obj.mobileNo,
        emailId: obj.emailId,
        dob: obj.dob,
        address: obj.address,
        city: obj.city,
        pinCode: obj.pinCode,
        uid: obj.uid,
        state: obj.state,
        country: obj.country,
        designation: obj.designation,
      };
      this.serv.postData(obj1).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.displayAllData();
          this.userForm.reset();
        }
        console.log(res);
      });
    } else {
      let obj = this.userForm.getRawValue();
      let obj1 = {
        cbTeamId: this.editObj.cbTeamId,
        createdBy: 'USER202203041214524702060',
        createdDate: new Date(),
        isDeleted: false,
        modifiedBy: '',
        modifiedDate: new Date(),
        personName: obj.personName,
        mobileNo: obj.mobileNo,
        emailId: obj.emailId,
        dob: obj.dob,
        address: obj.address,
        city: obj.city,
        pinCode: obj.pinCode,
        uid: obj.uid,
        state: obj.state,
        country: obj.country,
        designation: obj.designation,
      };
      this.serv.updateData(obj1).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.displayAllData();
          this.userForm.reset();
          this.buttonName = 'Submit';
          this.getCountryDropDown();
          this.getStateDropDown();
          this.getDesignationDropDown();
        }
        // console.log(res);
      });
    }
  }

  edit(editId: any) {
    this.buttonName = 'Update';
    this.editFlag = true;
    console.log(editId);
    this.editObj = editId;

    this.userForm.patchValue({
      createdBy: editId.createdBy,
      createdDate: editId.createdDate,
      isDeleted: false,
      modifiedBy: editId.modifiedBy,
      modifiedDate: editId.modifiedDate,
      personName: editId.personName,
      mobileNo: editId.mobileNo,
      emailId: editId.emailId,
      dob: editId.dob,
      address: editId.address,
      city: editId.city,
      pinCode: editId.pinCode,
      uid: editId.uid,
      state: editId.state,
      country: editId.country,
      designation: editId.designation,
    });

    this.getCountryDropDown();
    this.getStateDropDown();
    this.getDesignationDropDown();
  }

  get f() {
    return this.userForm.controls;
  }
}
