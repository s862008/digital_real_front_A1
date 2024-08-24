import {Component} from '@angular/core';
import {ApartmentFilterSearch, ApartmentShortCard} from "../../../core/models/apartment";
import {DataService} from "../../../core/services/data.service";
import {Filter} from "../../../core/models/filter";
import {FilterService} from "../../../core/services/filter.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css'
})


export class FilterSearchComponent {
  public toSearch!: ApartmentFilterSearch;
  public srok: string = "10.10.2024"
  public apartments: ApartmentShortCard[] = [
    {
      id: 0n,
      photoMainPath: '',
      apartmentNumber: 0,
      address: '',
      apartmentInfo: '',
      entrance: 0,
      numberOfFloorsPerEnt: 0,
      areaTotal: 0,
      areaKitchen: 0,
      areaLiving: 0,
      percent: 0,
      phone: '',
      priceAfterFormat: '',
      priceSqmtAfterFormat: '',
      webHref: '',
      tags: '',
      countView: 0n,
      status: '',
      statusInfo: '',
      article: '',
      numberOfRooms: '',
      price: 0n,
      priceSqmt: 0n,
      floor: 0,
      apartmentType: '',
      dueYear: '',
      dueQuart: 0
    }
  ];
  public filter!: Filter;
  public countForBtn: string = ""
  public totalPages!: number;
  public totalElements!: number;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public size: number = 10;
  public page: number = 0;
  formControl = new FormControl('');

  constructor(private dataservice: DataService, private filterservice: FilterService) {

  }

  ngOnInit(): void {
    this.toSearch = JSON.parse(sessionStorage.getItem("toFilterSearch")!);
    this.filter = this.filterservice.getFilterData()
    console.log("page two: " + this.filter.priceMax)
    // if (this.toSearch != null) {
    //   if (this.toSearch.numberOfRooms) {
    //     this.toSearch.numberOfRooms.forEach(e => {
    //       if (e == 'Студия') {
    //         this.filter.isAtelier = true
    //       }
    //       if (e == '1 комната') {
    //         this.filter.isOne = true
    //       }
    //       if (e == '2 комнаты') {
    //         this.filter.isTwo = true
    //       }
    //       if (e == '3 комнаты') {
    //         this.filter.isThree = true
    //       }
    //       if (e == '4 комнаты') {
    //         this.filter.isFour = true
    //       }
    //       if (e == '5 комнат и более') {
    //         this.filter.isFivePlus = true
    //       }
    //     });
    //
    //
    //     this.filter.areaTotalMax = this.toSearch.areaTotalMax;
    //     this.filter.areaTotalMin = this.toSearch.areaTotalMin;
    //     this.filter.priceMin = this.toSearch.priceMin;
    //     this.filter.priceMax = this.toSearch.priceMax;
    //   }
    // }
    this.dataservice.search(this.toSearch, this.size, this.page).subscribe({
      next: (data: any): void => {
        console.log(data);
        this.apartments = data?.body.content
        this.totalPages = data?.body.totalPages
        this.totalElements = data?.body.totalElements
      }
    })
  }

  public filterSearch(): void {
    this.toSearch = {
      numberOfRooms: this.numberOfRooms(),
      priceMin: this.filter.priceMin,
      priceMax: this.filter.priceMax,
      areaTotalMin: this.filter.areaTotalMin,
      areaTotalMax: this.filter.areaTotalMax
    }


    this.dataservice.search(this.toSearch, this.size, this.page).subscribe({
      next: (data: any): void => {
        console.log(data);
        this.apartments = data?.body.content
        this.totalPages = data?.body.totalPages
        this.totalElements = data?.body.totalElements
      }
    })
  }

  private numberOfRooms(): string [] | null {
    let numberOfRooms: string [] = []
    if (this.filter.isAtelier)
      numberOfRooms.push('Студия');
    if (this.filter.isOne)
      numberOfRooms.push('1 комната');
    if (this.filter.isTwo)
      numberOfRooms.push('2 комнаты');
    if (this.filter.isThree)
      numberOfRooms.push('3 комнаты');
    if (this.filter.isFour)
      numberOfRooms.push('4 комнаты');
    if (this.filter.isFivePlus)
      numberOfRooms.push('5 комнат и более');


    return numberOfRooms.length > 0 ? numberOfRooms : null;
  }

  clearSearch() {

    this.filter = this.filterservice.clearFilterData();

  }
}
