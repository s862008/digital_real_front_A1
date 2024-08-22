import { Component } from '@angular/core';
import {ApartmentShort} from "../../../core/models/apartment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public company: string = "СТЭЛ"
  public apartments: ApartmentShort[] = [];

  ngOnInit(): void {
    let x = 0;
    while (x < 3) {
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
  showPhone(){
    alert("8000-34-34-34")
  }

}
