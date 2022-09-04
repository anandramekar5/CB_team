import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExpertiseService {
  MasterUrl: string =
    'http://demomaster.consultbuddy.com/ExpertiseArea/Management/';
  constructor(private api: HttpClient) {}

  getAllData() {
    return this.api.get(
      this.MasterUrl + 'get-expertisearea?pageid=1&rowsperpage=10&seatchtext='
    );
  }

  getCategory() {
    return this.api.get(
      'http://demomaster.consultbuddy.com/Category/Management/get-ddl-category'
    );
  }

  postData(p_data: any) {
    return this.api.post<any>(
      'http://demomaster.consultbuddy.com/ExpertiseArea/Management/InsertMany',
      p_data
    );
  }
}
