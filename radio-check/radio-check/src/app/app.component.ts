import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { RadcheckComponent } from './test/radcheck/radcheck.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio_checkbox';

  constructor(private _bottomSheet: MatBottomSheet){}
  // openBottomSheet(): void {
  //   this._bottomSheet.open(RadcheckComponent,{
      
  //   });
  // }
}
