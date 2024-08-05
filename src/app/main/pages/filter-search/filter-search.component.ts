import {Component} from '@angular/core';
import {Apartment} from "../../../core/models/apartment";

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css'
})


export class FilterSearchComponent {

  public srok: string = "10.10.2024"
  public apartments: Apartment[] = [];

  constructor() {

  }

  ngOnInit(): void {
    let x = 0;
    while (x < 10) {
      this.apartments.push({
        room: '1 комната',
        square: '30 м²',
        type_build: 'монолит',
        address: 'ул. Ленина, д. 1',
        kitchen: '6 м²',
        roof: 'мансарда',
        date_relise: '2020-01-01'
      });
      x++;
    }
  }
}
