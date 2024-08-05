import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {

  category: string="Категория";
  type: string ="ТИП";
  cost: number = 10500;
  count: number =  34;
  tempText:string = "14";
  dt: string ="10.10.24";

  constructor() {
    console.log('!!!!')
  }

  ngOnInit(): void {}



}
