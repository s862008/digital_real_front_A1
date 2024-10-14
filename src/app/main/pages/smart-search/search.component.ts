import {Component, OnInit} from '@angular/core';
import {ApartmentShortCard} from "../../../core/models/apartment";
import {SmartParameters} from "../../../core/models/parametrs";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {DataService} from "../../../core/services/data.service";
import {SmartSearch} from "../../../core/models/search";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  public company: string = "СТЭЛ"
  public apartments: ApartmentShortCard[] = [];
  public smartParameters!: SmartParameters;
  public currentState$!: Observable<SmartParameters>;
  public loading: boolean = true;

  constructor(private dataservice: DataService, public route: ActivatedRoute, private router: Router) {
    // Получаем состояние
    if (this.router.getCurrentNavigation()) {
      const navigation = this.router.getCurrentNavigation();
      this.smartParameters = navigation && navigation.extras && navigation.extras.state ? navigation.extras.state['smartParam'] : undefined;
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
    if (this.smartParameters != null) {

     const toSearch : SmartSearch = {
       apartmentType: this.getApartmentType(),
       apartmentTypeWeight: this.getWeight(this.smartParameters.apartmentTypeWeight),

        numberOfRooms: this.getQuantityRooms(),
        numberOfRoomsWeight: this.getWeight(this.smartParameters.numberOfRoomsWeight),

        price: this.getPrice(),
        priceWeight: this.getWeight(this.priceWeight),

        countOfApartmentsFerFloor: this.getCountOfApartmentsFerFloor(),
        countOfApartmentsFerWeight: this.getWeight(this.countOfApartmentsFerFloorWeight),

        squarePrice: this.getSquarePrice(),
        squarePriceWeight: this.getWeight(this.squarePriceWeight),

        square: this.getSquare(),
        squareWeight: this.getWeight(this.squareWeight),

        residentialSquare: this.getResidentialSquare(),
        residentialSquareWeight: this.getWeight(this.residentialSquareWeight),

        squareKitchen: this.getSquareKitchen(),
        squareKitchenWeight: this.getWeight(this.squareKitchenWeight),

        floor: this.getFloor(),
        floorWeight: this.getWeight(this.floorWeight),
        isLastFloor: this.isLastFloor,
        isNotFirstFloor: this.isNotFirstFloor,
        isNotLastFloor: this.isNotLastFloor,

        countFloor: this.getCountFloor(),
        countFloorWeight: this.getWeight(this.countFloorWeight),


        saleType: this.getSaleType(),
        saleTypeWeight: this.getWeight(this.saleTypeWeight),

        repair: this.getRepair(),
        repairWeight: this.getWeight(this.repairWeight),

        isBalcony: this.isBalcony,
        isLoggia: this.isLoggia,
        isInsulatedBalcony: this.isInsulatedBalcony,
        balconyWeight: this.getWeight(this.balconyWeight),

        ceilingHeight: this.getCeilingHeight(),
        ceilingHeightWeight: this.getWeight(this.ceilingHeightWeight),

        houseType: this.getHouseType(),
        houseTypeWeight: this.getWeight(this.houseTypeWeight),

        isSmartHome: this.getIsSmartHome(),
        isSmartHomeWeight: this.getWeight(this.isSmartHomeWeight)

      }



      this.dataservice.smartSearch(toSearch, 10, 0).subscribe({
        next: (data: any): void => {
          // console.log(data);
          this.apartments = data?.content
          this.loading = false;
        }
      })

    }

  }

  private getWeight(weight: number): number {
    if (weight == null || weight == 0)
      return 1 / 10;
    return weight / 10;
  }

  private getQuantityRooms(): number[] | null {
    let quantityRooms: number[] = []
    if (this.smartParameters.isAtelier)
      quantityRooms.push(0.5);
    if (this.smartParameters.isOne)
      quantityRooms.push(1);
    if (this.smartParameters.isTwo)
      quantityRooms.push(2);
    if (this.smartParameters.isThree)
      quantityRooms.push(3);
    if (this.smartParameters.isFour)
      quantityRooms.push(4);
    if (this.smartParameters.isFreeLayout)
      quantityRooms.push(0);
    if (this.smartParameters.isFivePlus)
      quantityRooms.push(5);
    if (this.smartParameters.isOneEuro)
      quantityRooms.push(1.5);
    if (this.smartParameters.isTwoEuro)
      quantityRooms.push(2.5);
    if (this.smartParameters.isThreeEuro)
      quantityRooms.push(3.5);

    return quantityRooms.length > 0 ? quantityRooms : null;
  }

  private getApartmentType(): string[] | null {
    let apartmentType: string[] = [];
    if (this.smartParameters.isFlat)
      apartmentType.push('Квартира')
    if (this.smartParameters.isApartments)
      apartmentType.push('Апартаменты')

    return apartmentType.length > 0 ? apartmentType : null;
  }
}
