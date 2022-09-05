import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

// export interface PeriodicElement {
//      name:string,
//      productType:string;
//      ProductDetails:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-radcheck',
  templateUrl: './radcheck.component.html',
  styleUrls: ['./radcheck.component.css']
})
export class RadcheckComponent implements OnInit {

  displayedColumns: string[] = [
     'name',
     'productType',
     'ProductDetails',
     'action'
  ];
  dataSource:any=[];
  editData: any;
  prodVar!: any;
  editFlag = false;
  productForm!: FormGroup;
  constructor(private fb: FormBuilder,private _bottomSheet: MatBottomSheet, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  newArr: any[] = [];


  productArray: any[] = ['Electrical', 'Furniture'];

  ElectricalArr: any[] = [
    { id: 1, name: 'smart phones', checked: false },
    { id: 2, name: 'hair dryer', checked: false },
    { id: 3, name: 'camera', checked: false },
    { id: 4, name: 'mixer grinder', checked: false }
  ];
  FurnitureArr: any[] = [
    { id: 1, name: 'tables', checked: false },
    { id: 2, name: 'chairs', checked: false },
    { id: 3, name: 'beds', checked: false },
    { id: 4, name: 'desks', checked: false }
  ]
  ngOnInit(): void {
    let objj = this.data;
    this.productForm = this.fb.group({
      name:[objj? objj.name: ''],
      productType: [objj ? objj.productType : ''],
      ProductDetails: [objj ? objj.ProductDetails : '']
    })
    if(objj){
      let arr = objj.ProductDetails;

    this.newArr = this.productForm.value.productType == 'Electrical' ? this.ElectricalArr : this.FurnitureArr;

    this.newArr.find((ele:any)=>{
      console.log(ele);
      arr.find((items:any)=>{
        console.log(items);
        if(ele.name == items){
          ele.checked = true;
        }
      })
      
    })
    }
  //  this.editData = this.data;
  //  console.log(this.editData);
  //  this.getData();
      // this.productForm.patchValue({
      //   name:this.editData.name,
      //   productType: this.editData.productType,
      //   ProductDetails: this.editData.ProductDetails,
      // })
      
  }
  // getRadio(val: any) {
  //   console.log(val.value);
  //   this.prodVar = val.value;
  // }

  getSelectedType(val: any, i: number,flag:string) {

    if(val.checked){
      if (flag == 'Furniture') { //it returns true while clicked on checkbox //else it returns false while unclicked on checkbox
        this.FurnitureArr[i].checked = true;
      }
      else if(flag == 'Electrical') { 
        this.ElectricalArr[i].checked = true;
      }
  
    }else {
      if (flag == 'Furniture') { //it returns true while clicked on checkbox //else it returns false while unclicked on checkbox
        this.FurnitureArr[i].checked = false;
      }
      else if(flag == 'Electrical') { 
        this.ElectricalArr[i].checked = false;
      }
    }

}

  onSubmit() {
    console.log(this.productForm);
    
    
    // console.log(obj1);
    // console.log(typeof(obj1));
      
    if(this.productForm.value.productType == 'Electrical'){
     
      this.ElectricalArr.find((ele: any) => {
        if (ele.checked) {
          this.newArr.push(ele.name);
        }
      })
    }
    if(this.productForm.value.productType == 'Furniture'){
      
      this.FurnitureArr.find((ele: any) => {
        if (ele.checked) {
          this.newArr.push(ele.name);
        }
      })
    }

    this.productForm.value.ProductDetails = this.newArr;
    
    let obj = JSON.stringify(this.productForm.value);
    localStorage.setItem('productData',obj);

    
    this._bottomSheet.dismiss();
  }

  getData(){
    let obj = JSON.parse(localStorage.getItem('productData') || '');
    this.dataSource.push(obj);
    // let obj1 = [obj]
    // this.dataSource = obj1;
  }

  // onEdit(ele:any){
  //   this.editFlag = true;
  //   console.log(ele);
  //   this.productForm.patchValue({
  //     name:ele.name,
  //     productType: ele.productType,
  //     ProductDetails: ele.ProductDetails,
  //   })
  // }

  updateData(){
    // this.productForm.patchValue({
    //   name:this.editData.name,
    //   productType: this.editData.productType,
    //   ProductDetails: this.editData.ProductDetails,
    // })

    // let arr = this.editData.ProductDetails;

    // this.newArr = this.productForm.value.productType == 'Electrical' ? this.ElectricalArr : this.FurnitureArr;

    // this.newArr.find((ele:any)=>{
    //   arr.find((items:any)=>{
    //     if(ele.name == items){
    //       ele.checked = true;
    //     }
    //   })
      
    // })
  }
}


// onSubmit() {
//   let studentData = JSON.parse(localStorage.getItem('studentData') || '[]');
//   this.courseArray = this.stdFrm.value.branchType == 'IT' ? this.itCourse : this.mechCourse
//   console.log(this.courseArray);
//   this.courseArray.find((res: any) => {
// // res.checked ? this.newArr.push(res.name) : '';
//   if(res.checked)
//     {
//       this.newArr.push(res.name)
//     }
//   });
//   this.stdFrm.value.courseList = this.newArr;
//   console.log(this.stdFrm.value);
//   let formData = this.stdFrm.value;
//   if (localStorage.getItem('studentData')) {
//     formData.id = studentData.length + 1;
//     formData = [formData, ...studentData];
//   } else {
//     formData.id = 1;
//     formData = [formData];
//   }
//   localStorage.setItem('studentData', JSON.stringify(formData));
//   this.getValue(); 

//   if(!this.editFlag)
//   {

//   }
// }