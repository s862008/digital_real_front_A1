import {Component} from '@angular/core';
import {ApartmentFilterSearch, ApartmentShortCard} from "../../../core/models/apartment";
import {DataService} from "../../../core/services/data.service";
import {FilterSearch} from "../../../core/models/filterSearch";
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
  public apartments: ApartmentShortCard[] = [];
  public filter!: FilterSearch;
  public countForBtn: string = ""
  public totalPages!: number;
  public totalElements!: number;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public size: number = 10;
  public page: number = 0;
  formControl = new FormControl('');
  loading: boolean = true;
  isApartmen: boolean = true;

  constructor(private dataservice: DataService, private filterservice: FilterService) {

  }

  ngOnInit(): void {

    // this.toSearch = JSON.parse(sessionStorage.getItem("toFilterSearch")!);
    this.filter = this.filterservice.getFilterData()
    console.log("Filter" + this.filter)

    this.filterSearch()


  }

  public filterSearch(): void {
    this.loading=true;
    if (this.filter != null) {
      this.toSearch = {
        numberOfRooms: this.filterservice.numberOfRooms(this.filter),
        priceMin: this.filter.priceMin,
        priceMax: this.filter.priceMax,
        areaTotalMin: this.filter.areaTotalMin,
        areaTotalMax: this.filter.areaTotalMax
      }
    }

    this.dataservice.search(this.toSearch, this.size, this.page).subscribe({
      next: (data: any): void => {
        console.log(data);
        this.apartments = data?.body.content
        this.totalPages = data?.body.totalPages
        this.totalElements = data?.body.totalElements
        this.isApartmen =false;
        window.scroll({
          top: 1000,
          left: 0,
          behavior: "smooth",
        });


        if (this.apartments != null && this.apartments.length > 0) {
          this.isApartmen = true
        }

        this.loading=false;
      }
    })

  }

  clearSearch() {

    this.filter = this.filterservice.clearFilterData();

  }

  formatPrice(num: string) {
    if (!/^\d+$/.test(num)) {
      return 0
    } else {
      //  if (num.length > 3) {
      //   num = this.formatPrice(num.substring(0, num.length - 3)) + " " + num.substring(num.length - 3, num.length)
      //  }
      num = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

      return num
    }
  }

}
