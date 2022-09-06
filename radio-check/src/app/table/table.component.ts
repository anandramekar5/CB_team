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

 getData(){
   let obj = JSON.parse(localStorage.getItem('productData') || '[]');
  //  this.dataSource.push(obj);
  //  let obj1 = [obj]
   this.dataSource = obj;
 }

 onEdit(ele:any){
  this.openBottomSheet(ele);
 
 }


  openBottomSheet(dataaa: any): void {
   let sheet =  this._bottomSheet.open(RadcheckComponent,{
      data: dataaa,
      
    });
    sheet.afterDismissed().subscribe(x => {
      if (x == 'true') {
        this.getData();
      }
    });
  }
  
}
