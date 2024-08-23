import {Component} from '@angular/core';
import {ApartmentFilterSearch, ApartmentShort,ApartmentShortCard} from "../../../core/models/apartment";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css'
})


export class FilterSearchComponent {
  public toSearch!: ApartmentFilterSearch;
  public srok: string = "10.10.2024"
  public apartments: ApartmentShort[] = [];

  public cards?: ApartmentShortCard[];
  public totalPages!: number;
  public totalElements!: number;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public size: number = 10;
  public page: number = 0;

  constructor(private readonly dataservice: DataService) {

  }

  ngOnInit(): void {
    this.toSearch = JSON.parse(sessionStorage.getItem("toFilterSearch")!) ;
    console.log(this.toSearch);
    this.dataservice.search(this.toSearch, this.size, this.page).subscribe({
      next: (data: any): void => {
        console.log(data);
        this.cards = data?.body.content
        this.totalPages = data?.body.totalPages
        this.totalElements = data?.body.totalElements
      }
    })
  }
}
