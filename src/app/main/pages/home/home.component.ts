import {Component, OnInit} from '@angular/core';
import {BannerComponent} from "../../components/banner/banner.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit  {

  category: string="Категория";
  type: string ="ТИП";
  cost: number = 10500;
  count: number =  34;
  tempText:string = "14";
  dt: string ="10.10.24";
  gk_cards: string[]= ['1','2'];

  constructor() {
    console.log('!!load Home-page!!')
  }

  ngOnInit(): void {}



}
