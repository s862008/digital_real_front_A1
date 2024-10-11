import {Component, OnInit} from '@angular/core';
import {ApartmentShortCard} from "../../../core/models/apartment";
import {SmartParametrs} from "../../../core/models/parametrs";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  public company: string = "СТЭЛ"
  public apartments: ApartmentShortCard[] = [];
  public smartParametrs!: SmartParametrs;
  public currentState$!: Observable<SmartParametrs>;
  public loading: boolean = true;

  constructor(private dataservice: DataService, public route: ActivatedRoute, private router: Router) {
    // Получаем состояние
    if (this.router.getCurrentNavigation()) {
      const navigation = this.router.getCurrentNavigation();
      this.smartParametrs = navigation && navigation.extras && navigation.extras.state ? navigation.extras.state['smartParam'] : undefined;
    }

  }

  ngOnInit(): void {
    // let x: bigint = 0n;
    // while (x < 3) {
    //   this.apartments.push({
    //     address: "",
    //     company: "",
    //     type_build: "",
    //     id: 3332600n + x,
    //     numberOfRooms: '1 комната',
    //     areaTotal: 30,
    //     areaKitchen: 6,
    //     apartmentInfo: "",
    //     apartmentNumber: 0,
    //     apartmentType: "",
    //     areaLiving: 0,
    //     article: "",
    //     countView: 0n,
    //     dueQuart: 0,
    //     entrance: 0,
    //     floor: 0,
    //     numberOfFloorsPerEnt: 0,
    //     percent: 0,
    //     phone: "",
    //     photoMainPath: "",
    //     price: 0n,
    //     priceAfterFormat: "",
    //     priceSqmt: 0n,
    //     priceSqmtAfterFormat: "",
    //     status: "",
    //     statusInfo: "",
    //     tags: "",
    //     webHref: "",
    //     dueYear: '2020-01-01'
    //   });
    //   x++;
    // }


    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.smartParam)
    );

    this.searching();

  }

  showPhone() {
    alert("8000-34-34-34")
  }

  public searching(): void {

    this.loading = true;
    if (this.smartParametrs != null) {
      this.dataservice.smartSearch(this.smartParametrs, 10, 0).subscribe({
        next: (data: any): void => {
          // console.log(data);
          this.apartments = data?.content
          this.loading = false;
        }
      })

    }

  }
}
