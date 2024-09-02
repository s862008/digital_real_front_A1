import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SmartParametrsComponent} from "../../components/smart-parametrs/smart-parametrs.component";
import {ApartmentFilterSearch} from "../../../core/models/apartment";
import {absoluteFrom} from "@angular/compiler-cli";
import {Router} from "@angular/router";
import {FilterSearch} from "../../../core/models/filterSearch";
import {FormControl} from "@angular/forms";
import {DataService} from "../../../core/services/data.service";
import {FilterService} from "../../../core/services/filter.service";
import {RComplex} from "../../../core/models/rcomplex";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public toSearch?: ApartmentFilterSearch;

  public priceMin!: string;
  public priceMax!: string;
  public areaTotalMin!: string;
  public areaTotalMax!: string;

  public isAtelier: boolean;
  public isOne: boolean;
  public isTwo: boolean;
  public isThree: boolean;
  public isFour: boolean;
  public isFivePlus: boolean;

  category: string = "Категория";
  type: string = "ТИП";
  cost: number = 10500;
  apartmentCount: number = 34;
  rcomplexCount: string = "14";
  dt: string = "10.10.24";
  rcomplexCards?: RComplex[];
  formControl = new FormControl(false);


  constructor(private dialog: MatDialog, private router: Router, private filterservice: FilterService, private readonly dataservice: DataService) {
    this.priceMin = '';
    this.priceMax = '';
    this.areaTotalMin = '';
    this.areaTotalMax = '';
    this.isAtelier = false;
    this.isOne = false;
    this.isTwo = false;
    this.isThree = false;
    this.isFour = false;
    this.isFivePlus = false;

  }

  ngAfterViewInit() {

    this.formControl.valueChanges.subscribe(value => {
      setTimeout(() => {
        this.loadPrepearInfo();
      });
    });

    this.loadSuggest()

  }



  ngOnInit(): void {

  }

  loadPrepearInfo() {

    this.dataservice.loadPrepearInfo(this.toSearch = {
      numberOfRooms: this.numberOfRooms(),
      priceMin: this.priceMin,
      priceMax: this.priceMax,
      areaTotalMin: this.areaTotalMin,
      areaTotalMax: this.areaTotalMax
    }).subscribe({
      next: (data: any): void => {
        console.log(data);
        this.apartmentCount = data[0];
        this.rcomplexCount = data[1];
      }
    })

  }

  public filterSearch(): void {

    // this.toSearch = {
    //   numberOfRooms: this.numberOfRooms(),
    //   priceMin: this.priceMin,
    //   priceMax: this.priceMax,
    //   areaTotalMin: this.areaTotalMin,
    //   areaTotalMax: this.areaTotalMax
    // }
    let filter: FilterSearch = {
      priceMin: this.priceMin,
      priceMax: this.priceMax,
      areaTotalMin: this.areaTotalMin,
      areaTotalMax: this.areaTotalMax,
      isAtelier: this.isAtelier,
      isOne: this.isOne,
      isTwo: this.isTwo,
      isThree: this.isThree,
      isFour: this.isFour,
      isFivePlus: this.isFivePlus

    }

    this.filterservice.setFilterData(filter);
    // sessionStorage.setItem('toFilterSearch', JSON.stringify(this.toSearch));
    this.router.navigate(['/filter-search']);
  }

  private numberOfRooms(): string [] | null {
    let numberOfRooms: string [] = []
    if (this.isAtelier){
      numberOfRooms.push('Студия');
      numberOfRooms.push('0.5');}
    if (this.isOne){
      numberOfRooms.push('1 комната');
      numberOfRooms.push('1');}
    if (this.isTwo){
      numberOfRooms.push('2 комнаты');
      numberOfRooms.push('2');}
    if (this.isThree){
      numberOfRooms.push('3 комнаты');
      numberOfRooms.push('3');}
    if (this.isFour){
      numberOfRooms.push('4 комнаты');
      numberOfRooms.push('4');}
    if (this.isFivePlus){
      numberOfRooms.push('5 комнат и более');
      numberOfRooms.push('5');}

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


    this.dataservice.getRComplex( {
      method: "popular",
      id: 0n ,
      limit: 0
    }).subscribe({
      next: (data: any): void => {
        console.log(data);

      }
    })

  }
}


