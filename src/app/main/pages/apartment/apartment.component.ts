import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../../core/services/data.service";
import {Apartment, ApartmentFull, ApartmentShortCard} from "../../../core/models/apartment";
import {Gallery} from "../../../core/models/gallery";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})


export class ApartmentComponent implements OnInit {
  id: string = ""; // Переменная для хранения параметра

  imgPathMain!: string;

  public gallery: Gallery[] = [];
  rooms: string = "1 комната";
  public cards: ApartmentShortCard[] = [];
  public apartment!: ApartmentFull;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';

      this.dataService.getApartmentFull(this.id).subscribe({
        next: (data: any): void => {

          this.apartment = data;

           console.log(this.apartment);

          if (this.apartment.numberOfRooms) {

            this.rooms = this.apartment.numberOfRooms.substring(0, 1) + "-ком. квартира, " + this.apartment.areaTotal + " м²"
          }

          this.loading = false
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      })

      this.dataService.getApartmentGallery(this.id).subscribe(data => {
        if (data != null) {
          this.gallery = data;

          if (this.gallery.length > 0) {
            if (this.gallery[0].photoPath != null)
              this.imgPathMain = this.gallery[0].photoPath;
            else
              this.imgPathMain = this.gallery[0].planningPath || "";
          }
        }

      });

      this.dataService.searchSimillarApartments(this.id).subscribe({
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
