import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CbserviceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(
      'http://demousermanagement.consultbuddy.com/api/CBTeamMaster/get-cbmaster?pageid=1&rowsperpage=10'
    );
  }

  getStateData() {
    return this.http.get<any>(
      'http://demomaster.consultbuddy.com/api/StateMaster/get-ddl-state_1_0'
    );
  }

  getCountryData() {
    return this.http.get<any>(
      'http://demomaster.consultbuddy.com/Country/Management/get-ddl-country_1_0'
    );
  }

  getDesignationData() {
    return this.http.get<any>(
      'http://demomaster.consultbuddy.com/Designation/Management/get-ddl-designation_1_0'
    );
  }

  postData(p_data: any) {
    return this.http.post<any>(
      'http://demousermanagement.consultbuddy.com/api/CBTeamMaster/insert',
      p_data
    );
  }

  updateData(u_data: any) {
    return this.http.put<any>(
      'http://demousermanagement.consultbuddy.com/api/CBTeamMaster/update',
      u_data
    );
  }
}
