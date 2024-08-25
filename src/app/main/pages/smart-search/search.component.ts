import { Component } from '@angular/core';
import {ApartmentShortCard} from "../../../core/models/apartment";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public company: string = "СТЭЛ"
  public apartments: ApartmentShortCard[] = [];

  ngOnInit(): void {
    let x :bigint = 0n;
    while (x < 3) {
      this.apartments.push({
        address: "",
        company: "",
        type_build: "",
        id: 3332600n  + x,
        numberOfRooms:'1 комната',
        areaTotal: 30,
        areaKitchen: 6,
        apartmentInfo: "",
        apartmentNumber: 0,
        apartmentType: "",
        areaLiving: 0,
        article: "",
        countView: 0n,
        dueQuart: 0,
        entrance: 0,
        floor: 0,
        numberOfFloorsPerEnt: 0,
        percent: 0,
        phone: "",
        photoMainPath: "",
        price: 0n,
        priceAfterFormat: "",
        priceSqmt: 0n,
        priceSqmtAfterFormat: "",
        status: "",
        statusInfo: "",
        tags: "",
        webHref: "",
        dueYear: '2020-01-01'
      });
      x++;
    }
  }
  showPhone(){
    alert("8000-34-34-34")
  }

}
