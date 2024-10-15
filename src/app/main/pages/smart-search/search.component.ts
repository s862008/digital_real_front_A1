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

      const toSearch: SmartSearch = {
        apartmentType: this.getApartmentType(),
        apartmentTypeWeight: this.getWeight(this.smartParameters.apartmentTypeWeight),

        numberOfRooms: this.getQuantityRooms(),
        numberOfRoomsWeight: this.getWeight(this.smartParameters.numberOfRoomsWeight),

        plan: this.getPlan(),
        planWeight: this.getWeight(this.smartParameters.planWeight),

        price: this.getPrice(),
        priceWeight: this.getWeight(this.smartParameters.priceWeight),

        floor: this.getFloor(),
        floorWeight: this.getWeight(this.smartParameters.floorWeight),
        isLastFloor: this.smartParameters.isLastFloor,
        isNotFirstFloor: this.smartParameters.isNotFirstFloor,
        isNotLastFloor: this.smartParameters.isNotLastFloor,

        countFloor: this.getCountFloor(),
        countFloorWeight: this.getWeight(this.smartParameters.countFloorWeight),

        areaTotal: this.getTriangle(this.smartParameters.areaTotalMin,this.smartParameters.areaTotalPreference,this.smartParameters.areaTotalMax),
        areaKitchen: this.getTriangle(this.smartParameters.areaKitchenMin,this.smartParameters.areaKitchenPreference,this.smartParameters.areaKitchenMax),
        areaLiving: this.getTriangle(this.smartParameters.areaLivingMin,this.smartParameters.areaLivingPreference,this.smartParameters.areaLivingMax),
        areaWeight: this.getWeight(this.smartParameters.areaWeight),

        viewFromWindows: this.getViews(),
        viewFromWindowsWeight: this.getWeight(this.smartParameters.viewFromWindowsWeight),

        isBalcony: this.isBalcony,
        isLoggia: this.isLoggia,
        isInsulatedBalcony: this.isInsulatedBalcony,
        balconyWeight: this.getWeight(this.balconyWeight),


        countOfApartmentsFerFloor: this.getCountOfApartmentsFerFloor(),
        countOfApartmentsFerWeight: this.getWeight(this.countOfApartmentsFerFloorWeight),

        areaPrice: this.getTriangle(this.smartParameters.areaPriceMin,this.smartParameters.areaPricePreference,this.smartParameters.areaPriceMax),
        areaPriceWeight: this.getWeight(this.smartParameters.areaPriceWeight),



        residentialSquare: this.getResidentialSquare(),
        residentialSquareWeight: this.getWeight(this.residentialSquareWeight),





        saleType: this.getSaleType(),
        saleTypeWeight: this.getWeight(this.saleTypeWeight),

        repair: this.getRepair(),
        repairWeight: this.getWeight(this.repairWeight),



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

  private getTriangle(a,m,b): number[] | null {
    if (a == null && m == null && b == null)
      return null;
    return [Number(a), Number(m), Number(b)];
  }

  private getPrice(): number[] | null {
    if (this.smartParameters.priceMin == null && this.smartParameters.pricePreference == null && this.smartParameters.priceMax == null)
      return null;
    return [Number(this.smartParameters.priceMin), Number(this.smartParameters.pricePreference), Number(this.smartParameters.priceMax)];
  }

  private getFloor(): number[] | null {
    if (this.smartParameters.floorMin == null && this.smartParameters.floorMax == null)
      return null;
    return [Number((this.smartParameters.floorMin)), Number(this.smartParameters.floorPreference), Number(this.smartParameters.floorMax)];
  }

  private getCountFloor(): number[] | null {
    if (this.smartParameters.countFloorMin == null && this.smartParameters.countFloorPreference == null && this.smartParameters.countFloorMax == null)
      return null;
    return [Number((this.smartParameters.countFloorMin)), Number(this.smartParameters.countFloorPreference), Number(this.smartParameters.countFloorMax)];
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

  private getApartmentType(): number[] | null {
    let apartmentType: number[] = [];
    if (this.smartParameters.isFlat)
      apartmentType.push(1) // Квартира
    if (this.smartParameters.isApartments)
      apartmentType.push(2) // Апартаменты

    return apartmentType.length > 0 ? apartmentType : null;
  }

  private getPlan(): number[] | null {
    let planType: number[] = [];
    if (this.smartParameters.isBlandPlan)
      planType.push(1) // смежная
    if (this.smartParameters.isIsolatePlan)
      planType.push(2) // изолированная

    return planType.length > 0 ? planType : null;
  }

  private getViews(): number[] | null  {
    let characteristics: number[] = [];
    if (this.smartParameters.isViewStreet)
      characteristics.push(2)
    if (this.smartParameters.isViewYard)
      characteristics.push(1)
    if (this.smartParameters.isViewBothSide)
      characteristics.push(3)

    return characteristics.length > 0 ? characteristics : null;
  }
}
