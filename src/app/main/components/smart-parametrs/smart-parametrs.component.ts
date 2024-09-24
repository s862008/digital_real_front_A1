import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SmartParametrs} from "../../../core/models/parametrs";


@Component({
  selector: 'app-smart-parametrs',
  templateUrl: './smart-parametrs.component.html',
  styleUrl: './smart-parametrs.component.css'
})

export class SmartParametrsComponent implements OnInit {
  smartForm: FormGroup;
  yourModel: string="qqq";


  constructor(private fb: FormBuilder, public smartParametrs: SmartParametrs, private router: Router, private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef) {

    this.smartForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  listChecked() {
    const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
    let choosed = "";

    checkedInputs.forEach(input => {
      const lblElement = input.parentNode?.querySelector('.fp-label--tx');
      const parentElement = input.parentNode?.parentNode?.querySelector('h4');

      const lbl = lblElement?.textContent;
      const parent = parentElement?.innerText;
      const id = input.id;

      if (lbl) {
        choosed += `<div class='fp-choosed__item'><span>${parent} ${lbl.toLowerCase()} </span><label for='${id}'> X </label></div>`;
      }
    });

    const choosedBlock = document.getElementById("choosed-block");
    if (choosedBlock) {
      choosedBlock.innerHTML = choosed;
    }
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  ngOnInit() {

    this.listChecked();

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        if (checkbox.getAttribute('checked') == null) {
          checkbox.setAttribute('checked', 'checked')
        } else {
          checkbox.removeAttribute('checked');
        }
        this.listChecked();
      });
    });

  }

  clearFilter() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      checkbox.checked = false; // Устанавливаем значение checked в false
    });

    this.listChecked();
    this.cdRef.detectChanges();

  }


  onSubmit() {
    console.log("SUBMIT");
    if ("this.smartForm.value") {
      console.log(this.smartForm.value);
      this.dialogRef.close(this.smartForm.value);
    }
    this.router.navigate(['/smart-search']);
  }

  onCancel() {
    this.dialogRef.close();
  }


}

// interface SmartParametr {
//   isFlat: boolean;
//   planWeight: number;
//   isApartments: boolean;
//   isBlandPlan: boolean;
//   isIsolatePlan: boolean;
//   apartmentTypeWeight: number;
// }
