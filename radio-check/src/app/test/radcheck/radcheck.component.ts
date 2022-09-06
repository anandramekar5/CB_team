import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

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
  // formData!:any;
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
      this.editFlag = true;
      let arr = objj.ProductDetails;

    this.newArr = this.productForm.value.productType == 'Electrical' ? this.ElectricalArr : this.FurnitureArr;

    this.newArr.find((ele:any)=>{
      // console.log(ele);
      arr.find((items:any)=>{
        // console.log(items);
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
    if(!this.editFlag){
      console.log(this.productForm);
    let obj1 = JSON.parse(localStorage.getItem('productData') ||'[]');
    let formData = this.productForm.value;
    if(formData.productType == 'Electrical'){
     
      this.ElectricalArr.find((ele: any) => {
        if (ele.checked) {
          this.newArr.push(ele.name);
        }
      })
    }
    if(formData.productType == 'Furniture'){
      
      this.FurnitureArr.find((ele: any) => {
        if (ele.checked) {
          this.newArr.push(ele.name);
        }
      })
    }

    formData.ProductDetails = this.newArr;

    
    if (obj1.length) {
      formData.id = obj1.length + 1;
      formData = [formData, ...obj1];
    } else {
      formData.id = 1;
      formData = [formData];
    }
    
    localStorage.setItem('productData',JSON.stringify(formData));
    
  
    }
    else{
      let storeData =  JSON.parse(localStorage.getItem('productData') ||'[]');
      // console.log("aaa",storeData);
      // console.log("formdata",this.productForm);

      let testdata = this.data;

     const findId =  storeData.find((ele:any)=>{
       if(testdata.name == ele.name){
          return ele;
       }
      })

      console.log("ele",findId.id);

     
    }
    this._bottomSheet.dismiss('true');
  }

  getData(){
    let obj = JSON.parse(localStorage.getItem('productData') || '[]');
    this.dataSource = obj;
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

  // updateData(){
    
  // }
  
}


// else{
//   this.editFlag = true;
//   let student =this.stdFrm.value;
//     console.log("data", this.data);
    
//   let students = JSON.parse(localStorage.getItem('data') || '');
  
//   const studentList = [...students];

//   const index = students.findIndex((obj: any) => 
//    obj.id == student.id
    
//      );
//   console.log(index);
  
//   studentList[index] = student;
//   localStorage.setItem('data', JSON.stringify(studentList));
//   this._bottomSheet.dismiss();
// }