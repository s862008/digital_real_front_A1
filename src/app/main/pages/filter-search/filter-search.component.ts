import {Component} from '@angular/core';
import {ApartmentShort} from "../../../core/models/apartment";

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css'
})


export class FilterSearchComponent {

  public srok: string = "10.10.2024"
  public apartments: ApartmentShort[] = [];

  constructor() {

  }

  ngOnInit(): void {
    let x = 0;
    while (x < 10) {
      this.apartments.push({
        externalId: 3332600+x,
        company: "",
        quantityRooms:0,
        square: '30 м²',
        type_build: 'монолит',
        address: 'ул. Ленина, д. 1',
        kitchen: '6 м²',
        roof: 'мансарда',
        date_release: '2020-01-01'
      });
      x++;
    }
  }
}
