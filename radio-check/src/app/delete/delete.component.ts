import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }
  
 deleteData(){
  let getData = JSON.parse(localStorage.getItem('productData') || '');
  // console.log(this.data)

  let getIndex = getData.findIndex((ele:any)=>
    ele.id == this.data)
  
  getData.splice(getIndex,1);

  let newobj = JSON.stringify(getData);
  localStorage.setItem('productData',newobj);

  // console.log(getIndex);
  

  // localStorage.setItem('productData',JSON.stringify(getData));
  this.dialogRef.close('yes');
 }
}
