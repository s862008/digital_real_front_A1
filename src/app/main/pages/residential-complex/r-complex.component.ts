import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentShortCard, ApartmentWEB} from "../../../core/models/apartment";

@Component({
  selector: 'app-r-complex',
  templateUrl: './r-complex.component.html',
  styleUrl: './r-complex.component.css'
})
export class RComplexComponent {
  public id!:string;
  public apart_cards: ApartmentShortCard[] = [];


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
  }
}
