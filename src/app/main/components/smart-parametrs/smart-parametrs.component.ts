import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-smart-parametrs',
  templateUrl: './smart-parametrs.component.html',
  styleUrl: './smart-parametrs.component.css'
})
export class SmartParametrsComponent implements OnInit {
  smartForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<any>) {
    this.smartForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  listChecked() {
    const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
    let choosed = "";
    console.log("listChecked")
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


  ngOnInit() {

    this.listChecked();

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        if(checkbox.getAttribute('checked')==null){
          checkbox.setAttribute('checked','checked')
        }else{
          checkbox.removeAttribute('checked');
        }
        this.listChecked();
      });
    });


  }

  clearFilter() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkboxes)
    checkboxes.forEach(checkbox => {
      checkbox.removeAttribute('checked');
    });
    console.log("clear")
    this.listChecked();
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
