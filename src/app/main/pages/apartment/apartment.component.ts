import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../../core/services/data.service";
import {Apartment} from "../../../core/models/apartment";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})


export class ApartmentComponent implements OnInit {
  id: string = ""; // Переменная для хранения параметра
  data: any;
  rooms:string = "1 комната";
  public cards: Apartment[] = [];
  public apartment: Apartment;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.apartment = {
      externalId:0,
      quantityRooms:0,
      square: '',
      address: "",
      company: "",
      date_release: "",
      height_roof: "",
      kitchen: "",
      parking: "",
      price: 0,
      roof: "",
      type_build: ""

    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';

      this.dataService.getData(this.id).subscribe(data => {
        this.data = data;
      });

      this.dataService.getApartment(this.id).subscribe({
        next: (data: any): void => {

          this.apartment = data;
          console.log(this.apartment);
          if(this.apartment.quantityRooms>1){
            this.rooms=this.apartment.quantityRooms+" комнаты"
          }
          if(this.apartment.quantityRooms>4){
            this.rooms=this.apartment.quantityRooms+" комнат"
          }
          this.loading=false
        },
        error:(err) =>{
          console.error(err);
          this.loading =false;
        }

      })

      this.dataService.getSimillarApartments(this.id).subscribe({
        next: (data: any): void => {
          this.correctStyleIndicators();
          this.cards = data;
        }
      })

    });
  }

  showPhone() {
    alert("Phone-number");
  }

  private correctStyleIndicators() {
    // const carouselIndicators = document.getElementsByClassName("carousel-indicators ng-star-inserted")[0] as HTMLElement;
    // carouselIndicators.style.left = "35%";
  }
}
