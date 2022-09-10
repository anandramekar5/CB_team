import { FormComponent } from './../form/form.component';
import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'fname',
    'lname',
    'mobile',
    'city',
    'gender',
    'qualification',
    'action',
  ];

  getAllData = JSON.parse(localStorage.getItem('userDetails') || '[]');
  orderedData = this.getAllData.reverse();
  dataSource: any = this.orderedData;

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomSheet(data?: any): void {
    this._bottomSheet.open(FormComponent, {
      data: data,
    });
  }

  onEditData(ele: any) {
    console.log(ele);
    this.openBottomSheet(ele);
  }
}
