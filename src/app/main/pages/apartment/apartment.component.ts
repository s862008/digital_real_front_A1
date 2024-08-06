import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../../../core/services/data.service";
import {Apartment} from "../../../core/models/apartment";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})



export class ApartmentComponent {
  id: string =""; // Переменная для хранения параметра
  data:any;
  public cards: Apartment[] = [];
  public apartment!: Apartment;

  constructor(private route: ActivatedRoute ,  private dataService: DataService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';

       this.dataService.getData(this.id).subscribe(data => {
         this.data = data;
       });

      this.dataService.getApartment(this.id).subscribe({
        next: (data: any): void => {
          this.correctStyleIndicators();
          this.cards = data;
        }
      })

    this.apartment = {
        room: '1 комната',
        square: '30 м²',
        type_build: 'кирпичный',
        address: 'ул. Ленина, д. 1',
        kitchen: '6 м²',
        roof: 'мансарда',
        date_release: '2020-01-01',
        height_roof:"4 m",
        parking: "подземная",
        company:""
      };

      let x = 0;
      while (x <3) {
        this.cards.push({
          company: "",
          height_roof: "",
          parking: "",
          room: '1 комната',
          square: '30 м²',
          type_build: 'монолит',
          address: 'ул. Ленина, д. 1',
          kitchen: '6 м²',
          roof: 'мансарда',
          date_release: '2020-01-01'
        });
        x++;
      }


    });
  }

  showPhone(){
    alert("Phone-number");
  }

  private correctStyleIndicators() {
    // const carouselIndicators = document.getElementsByClassName("carousel-indicators ng-star-inserted")[0] as HTMLElement;
    // carouselIndicators.style.left = "35%";
  }
}
