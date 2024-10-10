import { Component } from '@angular/core';
import {ContainerComponent} from "../container/container.component";
import {SmartParametrsComponent} from "../smart-parametrs/smart-parametrs.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(private dialog: MatDialog) {
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


