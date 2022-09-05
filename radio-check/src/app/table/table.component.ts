import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RadcheckComponent } from '../test/radcheck/radcheck.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'productType',
    'ProductDetails',
    'action'
 ];
 dataSource:any=[];

 prodVar!: any;
 productForm!: FormGroup;
 constructor(private fb: FormBuilder,private _bottomSheet: MatBottomSheet) { }

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
   this.productForm = this.fb.group({
     name:[''],
     productType: [''],
     ProductDetails: []
   })
   this.getData();
 }
 // getRadio(val: any) {
 //   console.log(val.value);
 //   this.prodVar = val.value;
 // }

 getSelectedType(val: any, i: number,flag:string) {

   if(flag == 'Furniture'){
     if (val.checked) { //it returns true while clicked on checkbox //else it returns false while unclicked on checkbox
       this.FurnitureArr[i].checked = true;
     }
     else { 
       this.FurnitureArr[i].checked = false;
     }
 
   }

   if(flag == "Electrical"){
   if (val.checked) {
     this.ElectricalArr[i].checked = true;
   }
   else {
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
  //  this.getData();
 }

 getData(){
   let obj = JSON.parse(localStorage.getItem('productData') || '');
   this.dataSource.push(obj);
   // let obj1 = [obj]
   // this.dataSource = obj1;
 }

 onEdit(ele:any){
  this.openBottomSheet(ele);
  //  this.productForm.patchValue({
  //    name:ele.name,
  //    productType: ele.productType,
  //    ProductDetails: ele.ProductDetails,
  //  })
 }


  openBottomSheet(dataaa: any): void {
    this._bottomSheet.open(RadcheckComponent,{
      data: dataaa,
      
    });
  }
}
