import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterVehicleService } from '../register-vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  pageSize!:number;
  totalCount:number = 0;
  currentPage:number = 0;
  telecomProviderArr = ['Vodafone', 'Idea', 'Airtel', 'Jio', 'BSNL'];
  vehicleTypeArr = [{ id: 1, type: 'Tractor' }, { id: 2, type: 'Truck' }, { id: 3, type: 'Hywa' }, { id: 4, type: 'Other' }, { id: 6, type: 'Tipper' }];
  numberFormatArray:any[] = ['old','new'];
  blockUnblockArray:any[] = [{name:'Block', isBlock:true},{name:'Unblock', isBlock:false},]
  vehicleRegistrationForm!: FormGroup;

  displayedColumns: string[] = [
    'srNo',
    'vehicleRegistrationNo',
    'ownerName',
    'ownerMobileNo',
    'driverMobileNo',
    'action',
  ];
  dataSource:any[] = [];
 

  constructor(private vehicleRegisterservice : RegisterVehicleService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.displayData();
    this.formControl();
  }

  formControl(){
    this.vehicleRegistrationForm = this.fb.group({
    
      "createdBy": 0,
      "modifiedBy": 0,
      "createdDate": "2022-09-28T04:57:00.646Z",
      "modifiedDate": "2022-09-28T04:57:00.646Z",
      "isDeleted": true,
      "id": 0,
      "vehicleRegistrationNo": [''],
      "state": [''],
      "district": [''],
      "series": [''],
      "number": [''],
      "oldState": [''],
      "oldNum": [''],
      "ownerName": [''],
      "capacity": 0,
      "vehicleTypeId": [],
      "vehicleOwnerId": 0,
      "ownerMobileNo": [''],
      "driverName": [''],
      "driverMobileNo": [''],
      "address": [''],
      "licenseNo": [''],
      "permitNo": [''],
      "trainingDate": "2022-09-28T04:57:00.646Z",
      "isBlock": [],
      "serviceProvider": [''],
      "deviceId": [''],
      "deviceCompanyId": [],
      "deviceSIMNo": [''],
      "activationKey": [''],
      "activationKey1ExpireDate": "2022-09-28T04:57:00.646Z",
      "activationKey1LockOutCount": 0,
      "version": [''],
      "registrationId": [''],
      "transporterMobileNo": [''],
      "transporterId": 0,
      "nfcTagId": [''],
      "isRegisteredByOffice": [],
      "registeredBy": 0,
      "ownerAadharNo": 0,
      "ownerAadharFilePath": [''],
      "taxFilePath": [''],
      "insuranceFilePath": [''],
      "permitFilePath": [''],
      "certificateFilePath": [''],
      "rlw": 0,
      "ulw": 0,
      "cc": 0,
      "receiptNo": [''],
      "amount": 0,
      "applicationFormFilePath": [''],
      "invoiceCounter": 0,
      "transportType": [''],
      "remark": [''],
      "originalDeviceId": [''],
      "length": [],
      "width": [],
      "height": 0,
      "isVerified": [],
      "isForceValidateGPSDataConsistent": [],
      "forceValidateBy": 0,
      "forceValidateDate": "2022-09-28T04:57:00.646Z",
      "blockedBy": 0,
      "blockedDate": "2022-09-28T04:57:00.646Z",
      "isSuspicious": true,
      "suspiciousReason": "string",
      "suspiciousDate": "2022-09-28T04:57:00.646Z",
      "secondarySIMNo": "string",
      "primaryTelecomProvider": [''],
      "secondaryTelecomProvider": [''],
      "manufacturerId": 0,
      "tenantId": [''],
      "rfid": [''],
      "otp": [''],
      "frontImage": [''],
      "sideImage": [''],
      "numberPlateImage": [''],
      "mobileNo": [''],
      "deviceCompanyName": [''],
      "eTpMobileNumber": [''],
      "flag": "i",
      "pageName": ['']

    })
  }

  displayData(){
    this.vehicleRegisterservice.setHttp('get','VehicleRegistration?pageno='+ (this.currentPage + 1) +'&pagesize=10', false, false,false,
    'VehicleRegistration');
    this.vehicleRegisterservice.getHttp().subscribe({
     next:(res:any)=>{
       console.log(res);

       this.dataSource = res.responseData.responseData1
       this.totalCount = res.responseData.responseData2.totalCount;
     }
    })
 }

 onSubmitForm(){
  let finalData = this.vehicleRegistrationForm.value;
  console.log(finalData);
  
 }

  onClickPaginatior(data:any){
    this.pageSize = data.pageSize;
    this.currentPage = data.pageIndex;
    this.displayData();
 }

}
