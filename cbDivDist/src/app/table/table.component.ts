import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CbservService } from '../cbserv.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [
    'srNo',
    'govtBody',
    'ministry',
    'state',
    'zone',
    'division',
    'action',
  ];
  dataSource: any[]=[];
  userForm!:FormGroup;
  countryArray:any[]=[];
  stateArray:any[]=[];
  govtBodyArray:any[] = [{id:"1",name:"Central Government"},{id:"2",name:"State Government"}];
  ministryArray:any[]=[];
  zoneArray:any[]=[];
  minId!:any;
  flag:boolean = false;

  constructor(private fb: FormBuilder,private cbserv:CbservService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getCountryDropdown();
    // this.getMinistryDropdown();
    // this.getZoneDropdown();
    this.getStateDropdown();

    this.userForm = this.fb.group({
      country:[''],
      govtBody:[''],
      ministry:[''],
      state:[''],
      zone:[''],
      subZone:['']
    })
  }

  getAllData(){
    this.cbserv.getData().subscribe((res:any)=>{
      this.dataSource = res.responseData.data;
    })
  }

  // country dropdown
  getCountryDropdown(){
    this.cbserv.getCountry().subscribe((c_data:any)=>{
      this.countryArray = c_data.responseData;
    })
  }

  //state dropdown
  getStateDropdown(){
    this.cbserv.getState().subscribe((s_data:any)=>{
      this.stateArray = s_data.responseData;
    })
  }

  //ministry dropdown
  getMinistryDropdown(event:any){

    console.log(event);
    let g_id = event.value;
    
    this.cbserv.getMinistry(g_id).subscribe((m_data:any)=>{
      this.ministryArray = m_data.responseData;
    })
  }

  //zone dropdown
  getZoneDropdown(event:any){
    let m_id = event.value;
    this.cbserv.getZone(m_id).subscribe((z_data:any)=>{
      this.zoneArray = z_data.responseData;
    })
  }


  onFormSubmit(){

    if(!this.flag) {
      let dataValue = this.userForm.value;
      let obj = {
        createdBy: "USER202203041214524702060",
        createdDate: new Date(),
        modifiedDate: new Date(),
        zoneId: dataValue.zone,
        divisionName: dataValue.subZone,
        ministryId: dataValue.ministry,
        govtBodyId: dataValue.govtBody,
        countryId: dataValue.country,
        stateId: dataValue.state,
        modifiedBy: "",
      }
  
      this.cbserv.postData(obj).subscribe((p_data:any)=>{
        console.log(p_data);
        
      })
    }
  }

  onEdit(ele:any){
    console.log(ele);
    this.userForm.patchValue({
      country:ele.countryId,
      govtBody:ele.govtBodyId,
      ministry:ele.ministryId,
      state:ele.stateId,
      zone:ele.zoneId,
      subZone:ele.zoneName
    })
    this.getStateDropdown();
    
    
  }
}
