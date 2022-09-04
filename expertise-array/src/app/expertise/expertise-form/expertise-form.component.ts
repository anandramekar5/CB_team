import { Component, OnInit } from '@angular/core';
import { ExpertiseService } from '../expertise.service';
import { FormBuilder, FormGroup, Validator, FormArray } from '@angular/forms';

export interface PeriodicElement {
  srNo: number;
  expertiseAreaId: string;
  expertiseAreaName: string;
  categoryName: string;
  categoryId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-expertise-form',
  templateUrl: './expertise-form.component.html',
  styleUrls: ['./expertise-form.component.css'],
})
export class ExpertiseFormComponent implements OnInit {
  // expertiseAreaNames!: FormArray<any>;
  constructor(private data: ExpertiseService, private fb: FormBuilder) {}

  categoriesDropdown: any[] = [];

  expertiseForm!: FormGroup;

  displayedColumns: string[] = [
    'srNo',
    'Expertise Area',
    'Category Name',
    'Action',
  ];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.displayData();
    this.getCategoryDropdown();
    this.expertiseForm = this.fb.group({
      categoryName: [''],
      // expertiseAreaName: [''],
      expertiseAreaNames: this.fb.array([
        this.fb.group({
          expertiseAreaName: [''],
        }),
      ]),
    });
  }

  addExpertise() {
    const newField = this.fb.group({
      expertiseAreaName: [''],
    });
    (<FormArray>this.expertiseForm.get('expertiseAreaNames')).push(newField);
    // this.addressControls.push(newField);
  }

  get addressControls(): FormArray {
    return this.expertiseForm.get('expertiseAreaNames') as FormArray;
  }

  displayData() {
    this.data.getAllData().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.responseData.data;
    });
  }

  getCategoryDropdown() {
    this.data.getCategory().subscribe((c_data: any) => {
      console.log(c_data);
      this.categoriesDropdown = c_data.responseData;
    });
  }

  postAllData() {
    let obj = this.expertiseForm.value;

    let obj1 = {
      categoryName: obj.categoryName,
      expertiseAreaName: obj.expertiseAreaName,
    };
    console.log(obj);
    this.data.postData(obj1).subscribe((final_res) => {
      this.displayData();
    });
  }
}
