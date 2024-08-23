import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SmartParametrsComponent} from "../../components/smart-parametrs/smart-parametrs.component";
import {ApartmentFilterSearch} from "../../../core/models/apartment";
import {absoluteFrom} from "@angular/compiler-cli";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public toSearch?: ApartmentFilterSearch;

  public priceMin! : number;
  public priceMax!: number;
  public areaTotalMin! : number;
  public areaTotalMax! : number;

  public isAtelier: boolean = false;
  public isOne: boolean = false;
  public isTwo: boolean = false;
  public isThree: boolean = false;
  public isFour: boolean = false;
  public isFivePlus: boolean = false;

  category: string = "Категория";
  type: string = "ТИП";
  cost: number = 10500;
  count: number = 34;
  tempText: string = "14";
  dt: string = "10.10.24";
  gk_cards: string[] = ['1', '2'];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }


  public filterSearch(): void {
    this.toSearch = {
      numberOfRooms: this.numberOfRooms(),
      priceMin : this.priceMin,
      priceMax: this.priceMax,
      areaTotalMin : this.areaTotalMin,
      areaTotalMax : this.areaTotalMax
    }
    console.log("filtetClick")
    sessionStorage.setItem('toFilterSearch', JSON.stringify(this.toSearch));
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
