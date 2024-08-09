import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-smart-parametrs',
  templateUrl: './smart-parametrs.component.html',
  styleUrl: './smart-parametrs.component.css'
})
export class SmartParametrsComponent {
  smartForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<any>) {
    this.smartForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  onSubmit() {
    if (this.smartForm.valid) {
      console.log(this.smartForm.value);
      this.dialogRef.close(this.smartForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
