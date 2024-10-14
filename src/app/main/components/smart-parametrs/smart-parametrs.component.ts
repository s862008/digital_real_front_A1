import {ChangeDetectorRef, Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SmartParameters} from "../../../core/models/parametrs";
import {Company} from "../../../core/models/company";


@Component({
  selector: 'app-smart-parametrs',
  templateUrl: './smart-parametrs.component.html',
  styleUrl: './smart-parametrs.component.css'
})

export class SmartParametrsComponent implements OnInit, AfterViewInit {

  companies: Company[] = [];
  choosedItems: any[] = [];
  showElement = false;
  scrolling: number = 100;

  @ViewChild('formParam') formParam!: ElementRef;


  constructor(private el: ElementRef, public smartParametrs: SmartParameters, private router: Router, private dialogRef: MatDialogRef<any>, private cdRef: ChangeDetectorRef) {

    this.companies.push(new Company(1, 'АО СЗ ФК "АКСИОМА"', '123-456-7890'));
    this.companies.push(new Company(2, 'ООО Предприятие «ИП К.И.Т.»', '987-654-3210'));
    this.companies.push(new Company(3, 'ООО "СТЭЛ инвест"', '555-555-5555'));
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
    //   this.listChecked();
    this.clearFilter()
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (event) => {
        if (checkbox.getAttribute('checked') == null) {
          checkbox.setAttribute('checked', 'checked')
          this.choosedItems.push(checkbox.id)
        } else {
          checkbox.removeAttribute('checked');
          let indexToRemove = this.choosedItems.indexOf(checkbox.id);
          if (indexToRemove !== -1) {
            this.choosedItems.splice(indexToRemove, 1);
          }
        }
        this.listChecked();
      });
    });

    this.formParam.nativeElement.addEventListener('scroll', () => {
      const rect = this.formParam.nativeElement.getBoundingClientRect();
      const scrollTop = this.formParam.nativeElement.scrollTop;
      if (rect.top < -600 || scrollTop > 300) {
        this.showElement = true;
      } else {
        this.showElement = false;
      }
    });

  }

  clearFilter() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false; // Устанавливаем значение checked в false
    });
    this.listChecked();
    this.cdRef.detectChanges();
    this.choosedItems = [];
    this.smartParametrs = new SmartParameters();
  }

  onSubmit() {
    console.log("SUBMIT");

    this.dialogRef.close();

    this.router.navigate(['/smart-search'],
      {state: {smartParam: this.smartParametrs}});

  }

  onCancel() {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    // console.log( $('.fp-label--check'));

  }


  scrollToTop() {

    if (this.formParam) {
      this.formParam.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth' // плавная прокрутка
      });

      this.showElement = false;
    }
  }
  scrollToBottom() {
    if (this.formParam) {
      this.formParam.nativeElement.scrollTo({
        top: this.formParam.nativeElement.scrollHeight,
        behavior: 'smooth' // плавная прокрутка
      });
    }
  }

  isChoosedItemsEmpty() {
    return this.choosedItems.length == 0
  }

}

