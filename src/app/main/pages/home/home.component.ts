import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SmartParametrsComponent} from "../../components/smart-parametrs/smart-parametrs.component";
import {ApartmentFilterSearch} from "../../../core/models/apartment";
import {absoluteFrom} from "@angular/compiler-cli";
import {Router} from "@angular/router";
import {FilterSearch} from "../../../core/models/filterSearch";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../core/services/data.service";
import {FilterService} from "../../../core/services/filter.service";
import {RComplex, RComplexPopular} from "../../../core/models/rcomplex";
import  $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public toSearch?: ApartmentFilterSearch;
isLoadingVariants = false;
  category: string = "Категория";
  type: string = "ТИП";
  cost: number = 10500;
  apartmentCount: number = 34;
  rcomplexCount: string = "14";
  dt: string = "10.10.24";
  public rcomplexPopulars: RComplexPopular[] = [];
  formFilter: FormGroup;

  constructor(private dialog: MatDialog, private router: Router,private fb: FormBuilder, private filterservice: FilterService, private readonly dataservice: DataService) {

    this.formFilter = this.fb.group({
      isTwo: [false],
      isThree: [false],
      isFour: [false],
      isAtelier:[false],
      isOne:[false],
      isFivePlus: [false],
      priceMin: '',
      priceMax : '',
      areaTotalMin : '',
      areaTotalMax : '',
      due:[]
    });


  }

  ngAfterViewInit() {

    this.formFilter.valueChanges.subscribe(value => {
      setTimeout(() => {
        this.loadPrepearInfo();
      });
    });

    this.loadSuggest()

  }

  ngOnInit(): void {

  }

  loadPrepearInfo() {
this.isLoadingVariants=true;
    this.dataservice.loadPrepearInfo(this.toSearch = {
       numberOfRooms: this.numberOfRooms(),
       priceMin: this.formFilter.controls['priceMin'].value,
       priceMax: this.formFilter.controls['priceMax'].value,
       areaTotalMin: this.formFilter.controls['areaTotalMin'].value,
       areaTotalMax: this.formFilter.controls['areaTotalMax'].value
    }).subscribe({
      next: (data: any): void => {
        this.isLoadingVariants= false;
        this.apartmentCount = data[0];
        this.rcomplexCount = data[1];
      }
     })
  }

  public filterSearch(): void {

    let filter: FilterSearch = {
      priceMin: this.formFilter.controls['priceMin'].value,
      priceMax: this.formFilter.controls['priceMax'].value,
      areaTotalMin: this.formFilter.controls['areaTotalMin'].value,
      areaTotalMax: this.formFilter.controls['areaTotalMax'].value,
      isAtelier: this.formFilter.controls['isAtelier'].value,
      isOne: this.formFilter.controls['isOne'].value,
      isTwo: this.formFilter.controls['isTwo'].value,
      isThree: this.formFilter.controls['isThree'].value,
      isFour: this.formFilter.controls['isFour'].value,
      isFivePlus: this.formFilter.controls['isFivePlus'].value
    }

    this.filterservice.setFilterData(filter);
    // sessionStorage.setItem('toFilterSearch', JSON.stringify(this.toSearch));
    this.router.navigate(['/filter-search']);
  }

  private numberOfRooms(): string [] | null {
    let numberOfRooms: string [] = []
    if (this.formFilter.controls['isAtelier'].value) {
      numberOfRooms.push('Студия');
      numberOfRooms.push('0.5');
    }
    if (this.formFilter.controls['isOne'].value) {
      numberOfRooms.push('1 комната');
      numberOfRooms.push('1');
    }
    if (this.formFilter.controls['isTwo'].value) {
      numberOfRooms.push('2 комнаты');
      numberOfRooms.push('2');
    }
    if (this.formFilter.controls['isThree'].value) {
      numberOfRooms.push('3 комнаты');
      numberOfRooms.push('3');
    }
    if (this.formFilter.controls['isFour'].value) {
      numberOfRooms.push('4 комнаты');
      numberOfRooms.push('4');
    }
    if (this.formFilter.controls['isFivePlus'].value) {
      numberOfRooms.push('5 комнат и более');
      numberOfRooms.push('5');
    }

    return numberOfRooms.length > 0 ? numberOfRooms : null;
  }


  openDialog() {
    const dialogRef = this.dialog.open(SmartParametrsComponent, {height: '100%', width: '95%'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Данные из формы:', result);
      }

    });
  }


  private loadSuggest() {


    this.dataservice.getRComplex({
      method: "popular",
      id: 0n,
      limit: 0
    }).subscribe({
      next: (data: any): void => {

        let iterationCount = 0;
        const maxIterations = 2;
        for (const dataKey in data) {
          if (iterationCount >= maxIterations) {
            break; // Прерываем цикл, если достигнуто максимальное количество итераций
          }

          const dataValue = data[dataKey];
          const r: RComplexPopular = {
            address: dataValue.address,
            company: dataValue.company,
            id: dataValue.id,
            name: dataValue.name,
            orderByRooms: dataValue.orderByRooms,
            phone: dataValue.phone,
            countApartments:dataValue.countApartments,
            priceMax: 0,
            priceMin: 0,
          }
          this.rcomplexPopulars.push(r)
          iterationCount++;
        }
        console.log(this.rcomplexPopulars);
      }
    })

  }
}


