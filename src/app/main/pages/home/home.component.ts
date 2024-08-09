import {Component, OnInit} from '@angular/core';
import {BannerComponent} from "../../components/banner/banner.component";
import {MatDialog} from "@angular/material/dialog";
import {SmartParametrsComponent} from "../../components/smart-parametrs/smart-parametrs.component";
import {absoluteFrom} from "@angular/compiler-cli";


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

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(SmartParametrsComponent,{height:'100%',width:'90%'});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Данные из формы:', result);
      }
    });
  }





}
