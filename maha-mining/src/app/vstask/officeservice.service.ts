import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OfficeserviceService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<any[]>(
      'http://awsapi.mahamining.com/mineral-mapping/department/get-department-details?OrganizationId=0&StateId=1&DivisionId=3&DistrictId=0&NoPage=1&RowsPerPage=10'
    );
    // department/get-department-details?OrganizationId=0&StateId=1&DivisionId=3&DistrictId=0&NoPage=1&RowsPerPage=10
  }

  submitAllData(postdata: any) {
    return this.http.post(
      'http://awsapi.mahamining.com/mineral-mapping/department/save-department',
      postdata
    );
  }

  getDepartmentDropdown() {
    return this.http.get<any[]>(
      'http://awsapi.mahamining.com/mineral-mapping/consumer-project/get-organization?UserId=1'
    );
  }

  getStateDropdown() {
    return this.http.get<any[]>(
      'http://awsmaster.mahamining.com/master/states/1'
    );
  }

  getDivisionDropdown(sid: any) {
    return this.http.get<any[]>(
      'http://awsmaster.mahamining.com/master/divisions/1' + '/' + sid
    );
  }

  getDistrictDropdown(did: any) {
    return this.http.get<any[]>(
      'http://awsmaster.mahamining.com/master/districts/GetDistrictByUserIdDivisionId/1' +
        '/' +
        did
    );
  }
}
