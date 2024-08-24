import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SmartParametrsComponent} from "../../components/smart-parametrs/smart-parametrs.component";
import {ApartmentFilterSearch} from "../../../core/models/apartment";
import {absoluteFrom} from "@angular/compiler-cli";
import {Router} from "@angular/router";
import {Filter} from "../../../core/models/filter";
import {FormControl} from "@angular/forms";
import {DataService} from "../../../core/services/data.service";
import {FilterService} from "../../../core/services/filter.service";


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
  gk_cards: string[] = ['1', '2'];
  formControl = new FormControl(false);


  formatPrice(num: string){
    if (!/^\d+$/.test(num)) {
       return 0
    }else {
     //  if (num.length > 3) {
     //   num = this.formatPrice(num.substring(0, num.length - 3)) + " " + num.substring(num.length - 3, num.length)
     //  }
       num = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

      return num
    }
  }

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

  ngAfterViewInit(){

    this.formControl.valueChanges.subscribe(value => {

      setTimeout(() => {
        this.loadPrepearInfo();
      });

    });
  }
  ngOnInit(): void {


  }

  loadPrepearInfo() {

    console.log(this.toSearch);

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
    this.toSearch = {
      numberOfRooms: this.numberOfRooms(),
      priceMin: this.priceMin,
      priceMax: this.priceMax,
      areaTotalMin: this.areaTotalMin,
      areaTotalMax: this.areaTotalMax
    }
    let filter: Filter = {
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
    console.log("page one: " + this.filterservice.getFilterData().priceMax)
    sessionStorage.setItem('toFilterSearch', JSON.stringify(this.toSearch));
    this.router.navigate(['/filter-search']);
  }

  private numberOfRooms(): string [] | null {
    let numberOfRooms: string [] = []
    if (this.isAtelier)
      numberOfRooms.push('Студия');
    if (this.isOne)
      numberOfRooms.push('1 комната');
    if (this.isTwo)
      numberOfRooms.push('2 комнаты');
    if (this.isThree)
      numberOfRooms.push('3 комнаты');
    if (this.isFour)
      numberOfRooms.push('4 комнаты');
    if (this.isFivePlus)
      numberOfRooms.push('5 комнат и более');


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


}
