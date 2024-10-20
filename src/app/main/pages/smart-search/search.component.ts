import {Component, OnInit} from '@angular/core';
import {ApartmentShortCard} from "../../../core/models/apartment";
import {SmartParameters} from "../../../core/models/parametrs";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {DataService} from "../../../core/services/data.service";
import {SmartSearch} from "../../../core/models/search";
import {Company} from "../../../core/models/company";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  public companies!: Company;
  public apartments: ApartmentShortCard[] = [];
  public smartParameters!: SmartParameters;
  public currentState$!: Observable<SmartParameters>;
  public loading: boolean = true;
  public houseTypes!: string[];

  constructor(private dataservice: DataService, public route: ActivatedRoute, private router: Router) {
    // Получаем состояние
    if (this.router.getCurrentNavigation()) {
      const navigation = this.router.getCurrentNavigation();
      this.smartParameters = navigation && navigation.extras && navigation.extras.state ? navigation.extras.state['smartParam'] : undefined;

      this.smartParameters.parametrs =[{name:"isSmart",check: false}];

    }
    this.houseTypes = ["Кирпичный", "Монолитный","Панельный","Кирпично-монолитный","Блочный","Другой"];

  }
  toogleParameter(param: { check: boolean; }){
    param.check = !param.check;
  }
  resetParameter(param: { check: boolean; }){
    param.check = false;
  }

  ngOnInit(): void {

    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.smartParam)
    );

    this.searching();

  }

  showPhone(phone: string) {
    alert("тел: "+phone);
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

        price: this.getTriangle(this.smartParameters.priceMin, this.smartParameters.pricePreference, this.smartParameters.priceMax),
        priceWeight: this.getWeight(this.smartParameters.priceWeight),

        floor: this.getTriangle(this.smartParameters.floorMin, this.smartParameters.floorPreference, this.smartParameters.floorMax),
        floorWeight: this.getWeight(this.smartParameters.floorWeight),
        isLastFloor: this.smartParameters.isLastFloor,
        isNotFirstFloor: this.smartParameters.isNotFirstFloor,
        isNotLastFloor: this.smartParameters.isNotLastFloor,

        countFloor: this.getTriangle(this.smartParameters.countFloorMin, this.smartParameters.countFloorPreference, this.smartParameters.countFloorMax),
        countFloorWeight: this.getWeight(this.smartParameters.countFloorWeight),

        areaTotal: this.getTriangle(this.smartParameters.areaTotalMin, this.smartParameters.areaTotalPreference, this.smartParameters.areaTotalMax),
        areaKitchen: this.getTriangle(this.smartParameters.areaKitchenMin, this.smartParameters.areaKitchenPreference, this.smartParameters.areaKitchenMax),
        areaLiving: this.getTriangle(this.smartParameters.areaLivingMin, this.smartParameters.areaLivingPreference, this.smartParameters.areaLivingMax),
        areaWeight: this.getWeight(this.smartParameters.areaWeight),

        viewFromWindows: this.getViews(),
        viewFromWindowsWeight: this.getWeight(this.smartParameters.viewFromWindowsWeight),

        balcony: this.getBalcony(),
        balconyWeight: this.getWeight(this.smartParameters.balconyWeight),

        bathroom: this.getBathroom(),
        bathroomWeight: this.getWeight(this.smartParameters.bathroomWeight),

        isElectricStove: this.smartParameters.isElectricStove,
        isGasStove: this.smartParameters.isGasStove,
        stoveWeight: this.getWeight(this.smartParameters.stoveWeight),

        decoration: this.getDecoration(),
        decorationWeight: this.getWeight(this.smartParameters.decorationWeight),

        numberOfApartments: this.getTriangle(this.smartParameters.numberOfApartmentsMin, this.smartParameters.numberOfApartmentsPreference, this.smartParameters.numberOfApartmentsMax),
        numberOfApartmentsWeight: this.getWeight(this.smartParameters.numberOfApartmentsWeight),

        areaPrice: this.getTriangle(this.smartParameters.areaPriceMin, this.smartParameters.areaPricePreference, this.smartParameters.areaPriceMax),
        areaPriceWeight: this.getWeight(this.smartParameters.areaPriceWeight),

        decorationWall: this.getDecorationWall(),
        decorationWallWeight: this.getWeight(this.smartParameters.decorationWallWeight),

        decorationCeiling: this.getDecorationCeiling(),
        decorationCeilingWeight: this.getWeight(this.smartParameters.decorationCeilingWeight),

        floorCovering: this.getFloorCovering(),
        floorCoveringWeight: this.getWeight(this.smartParameters.floorCoveringWeight),

        repairType: this.getRepairType(),
        repairTypeWeight: this.getWeight(this.smartParameters.repairTypeWeight),

        glazing: this.getGlazing(),
        glazingWeight: this.getWeight(this.smartParameters.glazingWeight),

        isWithoutDecBathroom: this.smartParameters.isWithoutDecBathroom,
        isWithDecBathroom: this.smartParameters.isWithDecBathroom,
        decorationBathroomWeight: this.getWeight(this.smartParameters.decorationBathroomWeight),

        radiators: this.getRadiators(),
        radiatorsWeight: this.getWeight(this.smartParameters.radiatorsWeight),

        houseType: this.getBuilds(),
        houseTypeWeight: this.getWeight(this.smartParameters.buildWeight),

        dClass: this.getClass(),
        dClassWeight: this.getWeight(this.smartParameters.classWeight),

        asesmic: this.getAsesmic(),
        asesmicWeight: this.getWeight(this.smartParameters.asesmicWeight),

        due: [this.smartParameters.dueYearMin, this.smartParameters.dueYearMax, (this.smartParameters.isDone ? 1 : 0)],
        dueWeight: this.getWeight(this.smartParameters.dueWeight),

        ceilingHeight: this.getCeilingHeight(),
        ceilingHeightWeight: this.getWeight(this.smartParameters.ceilingHeightWeight),

        numberElevators: this.getNumberElevators(),
        numberElevatorsWeight: this.getWeight(this.smartParameters.numberElevatorsWeight),

        smartHome: this.getSwitch([this.smartParameters.isSmart, this.smartParameters.isNotSmart]),
        smartHomeWeight: this.getWeight(this.smartParameters.smartHomeWeight),

        elevatorType: this.getSet([this.smartParameters.isPassenger, this.smartParameters.isCargo, (this.smartParameters.isCargo && this.smartParameters.isPassenger)]),
        elevatorTypeWeight: this.getWeight(this.smartParameters.elevatorTypeWeight),

        selfBoiler: this.getSwitch([this.smartParameters.isSelfBoiler, this.smartParameters.isNoSelfBoiler]),
        selfBoilerWeight: this.getWeight(this.smartParameters.selfBoilerWeight),

        nearby: this.getNearby(),
        nearbyWeight: this.getWeight(this.smartParameters.nearbyWeight),

        parking: this.getParking(),
        parkingWeight: this.getWeight(this.smartParameters.parkingWeight),

        closedYard: this.getSwitch([this.smartParameters.isClosedYard, this.smartParameters.isNoClosedYard]),
        closedYardWeight: this.getWeight(this.smartParameters.closedYardWeight),

        furniture: this.getSet([this.smartParameters.isNoFurniture, this.smartParameters.isFurnitureKitch, this.smartParameters.isFurniture]),
        furnitureWeight: this.getWeight(this.smartParameters.furnitureWeight),

        saleType: this.getSet([this.smartParameters.isDDU, this.smartParameters.isGSK, this.smartParameters.isPereustpka, this.smartParameters.isDKP]),
        warranty: this.getSwitch([this.smartParameters.isWarranty, this.smartParameters.isNoWarranty]),
        onlineBooking: this.getSwitch([this.smartParameters.isWithOnlineBook, this.smartParameters.isWithOutOnlineBook]),
        electronReg: this.getSwitch([this.smartParameters.isElectronReg, this.smartParameters.isNoElectronReg]),
        stoke: this.getSwitch([this.smartParameters.isStoke, this.smartParameters.isNoStoke]),
        dealWeight: this.getWeight(this.smartParameters.dealWeight),
      }

      this.dataservice.smartSearch(toSearch, 10, 0).subscribe({
        next: (data: any): void => {
          if (data != null) {
            console.log(data);
            this.apartments = data?.content


          }
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

  private getTriangle(a: number, m: number, b: number): number[] | null {
    if (a == null || m == null || b == null)
      return null;
    return [Number(a), Number(m), Number(b)];
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

  private getViews(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isViewStreet)
      characteristics.push(2)
    if (this.smartParameters.isViewYard)
      characteristics.push(1)
    if (this.smartParameters.isViewBothSide)
      characteristics.push(3)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getBalcony(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isBalcony)
      characteristics.push(1)
    if (this.smartParameters.isLoggia)
      characteristics.push(2)
    if (this.smartParameters.isInsulatedBalcony)
      characteristics.push(3)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getBathroom(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isCombined)
      characteristics.push(1)
    if (this.smartParameters.isSeparate)
      characteristics.push(2)
    if (this.smartParameters.isTwoBath)
      characteristics.push(3)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getDecoration(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isPreFinishing)
      characteristics.push(1)
    if (this.smartParameters.isFinishing)
      characteristics.push(2)
    if (this.smartParameters.isEconomyClass)
      characteristics.push(3)
    if (this.smartParameters.isComfortClass)
      characteristics.push(4)
    if (this.smartParameters.isBusinessClass)
      characteristics.push(5)
    if (this.smartParameters.isWithoutFinishing)
      characteristics.push(6)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getDecorationWall(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isWallpaper)
      characteristics.push(1)
    if (this.smartParameters.isPaint)
      characteristics.push(2)
    if (this.smartParameters.isPanelWall)
      characteristics.push(3)
    if (this.smartParameters.isLincrusta)
      characteristics.push(4)
    if (this.smartParameters.isPlaster)
      characteristics.push(5)
    if (this.smartParameters.isBrickWall)
      characteristics.push(6)
    if (this.smartParameters.isWithoutWall)
      characteristics.push(7)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getDecorationCeiling(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isWhiteCeiling)
      characteristics.push(1)
    if (this.smartParameters.isColorCeiling)
      characteristics.push(2)
    if (this.smartParameters.isTilesCeiling)
      characteristics.push(3)
    if (this.smartParameters.isFalseCeiling)
      characteristics.push(4)
    if (this.smartParameters.isStretchCeiling)
      characteristics.push(5)
    if (this.smartParameters.isWithoutCeiling)
      characteristics.push(6)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getFloorCovering(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isLinoleum)
      characteristics.push(1)
    if (this.smartParameters.isLaminate)
      characteristics.push(2)
    if (this.smartParameters.isParquet)
      characteristics.push(3)
    if (this.smartParameters.isStoneware)
      characteristics.push(4)
    if (this.smartParameters.isQuartzvinyl)
      characteristics.push(5)
    if (this.smartParameters.isWithoutFloor)
      characteristics.push(6)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getRepairType(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isCosmeticRep)
      characteristics.push(1)
    if (this.smartParameters.isEuroRep)
      characteristics.push(2)
    if (this.smartParameters.isDisignRep)
      characteristics.push(3)
    if (this.smartParameters.isWithoutRep)
      characteristics.push(4)

    return characteristics.length > 0 ? characteristics : null;
  }


  private getGlazing(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isPVH)
      characteristics.push(1)
    if (this.smartParameters.isAluminum)
      characteristics.push(2)
    if (this.smartParameters.isVitrazh)
      characteristics.push(3)
    if (this.smartParameters.isWithoutGlazing)
      characteristics.push(4)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getRadiators(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isBimetalRadtr)
      characteristics.push(1)
    if (this.smartParameters.isSteelRadtr)
      characteristics.push(2)
    if (this.smartParameters.isAluminumRadtr)
      characteristics.push(3)

    return characteristics.length > 0 ? characteristics : null;
  }


  private getBuilds(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isPanelBuild)
      characteristics.push(1)
    if (this.smartParameters.isBrickBuild)
      characteristics.push(2)
    if (this.smartParameters.isMonolithicBuild)
      characteristics.push(3)
    if (this.smartParameters.isMnlBrckBuild)
      characteristics.push(4)
    if (this.smartParameters.isBlockBuild)
      characteristics.push(5)
    if (this.smartParameters.isAnotherBuild)
      characteristics.push(6)

    return characteristics.length > 0 ? characteristics : null;
  }


  private getClass(): string[] | null {
    let d_class: string[] = [];
    if (this.smartParameters.isClassA)
      d_class.push('A')
    if (this.smartParameters.isClassB)
      d_class.push('B')
    if (this.smartParameters.isClassC)
      d_class.push('C')
    if (this.smartParameters.isClassD)
      d_class.push('D')
    if (this.smartParameters.isClassE)
      d_class.push('E')

    return d_class.length > 0 ? d_class : null;
  }

  private getCeilingHeight(): number[] | null {
    let ceilingHeight: number[] = [];
    if (this.smartParameters.isCeilHeightTo2_7)
      ceilingHeight.push(2.69)
    if (this.smartParameters.isCeilHeightFrom2_7)
      ceilingHeight.push(2.7)
    if (this.smartParameters.isCeilHeightFrom3)
      ceilingHeight.push(3)
    if (this.smartParameters.isCeilHeightTFrom3_5)
      ceilingHeight.push(3.5)

    return ceilingHeight.length > 0 ? ceilingHeight : null;
  }

  private getAsesmic(): number[] | null {
    let characteristics: number[] = [];
    if (this.smartParameters.isAsesmic5)
      characteristics.push(5)
    if (this.smartParameters.isAsesmic6)
      characteristics.push(6)
    if (this.smartParameters.isAsesmic7)
      characteristics.push(7)

    return characteristics.length > 0 ? characteristics : null;
  }

  private getSet(array: boolean[]): number[] | null {
    const characteristics: number[] = [];

    array.forEach((value, index) => {
      if (value) {
        characteristics.push(index + 1);
      }
    });

    return characteristics.length > 0 ? characteristics : null;
  }

  private getSwitch(array: boolean[]): boolean[] | null {

    const characteristics = array.reduce<boolean[]>((acc, value, index) => {
      if (index === 0 && value) acc.push(true);
      if (index === 1 && value) acc.push(false);
      return acc;
    }, []);

    return characteristics.length > 0 ? characteristics : null;
  }

  private getNumberElevators(): boolean[] | null {
    if (!this.smartParameters.isElevator1 && !this.smartParameters.isElevator2 && !this.smartParameters.isElevator3)
      return null;

    return [this.smartParameters.isElevator1, this.smartParameters.isElevator2, this.smartParameters.isElevator3];
  }

  private getNearby(): number[] | null {
    const characteristics: number[] = [];
    const array: boolean[] = [this.smartParameters.isNearbyShop,
      this.smartParameters.isNearbyFitness,
      this.smartParameters.isNearbyPark,
      this.smartParameters.isNearbySchool,
      this.smartParameters.isNearbyKindergarten,
      this.smartParameters.isNearbyPolyclinic,
      this.smartParameters.isNearbyBusStation,
      this.smartParameters.isNearbyCarService];

    array.forEach((value, index) => {
      if (value) {
        characteristics.push(index + 1);
      }
    });

    return characteristics.length > 0 ? characteristics : null;
  }

  private getParking(): number[] | null {
    const characteristics: number[] = [];
    const array: boolean[] = [this.smartParameters.isUnderground,
      this.smartParameters.isSurface,
      this.smartParameters.isOpenParking,
      this.smartParameters.isClosedParking];

    array.forEach((value, index) => {
      if (value) {
        characteristics.push(index + 1);
      }
    });

    return characteristics.length > 0 ? characteristics : null;
  }

  public getCompany(id: number): string | undefined {
    if (id == 1) {
      return "АО СЗ ФК \"АКСИОМА\""
    }
    return "";
  }

  getHouseTypeName(houseType: number): string {
    if (this.houseTypes != null && this.houseTypes.length < houseType) {
      return this.houseTypes[houseType - 1];
    }
    return "";

  }

  getNumberOfRoomsString(numberOfRooms: number): string {

    if (numberOfRooms == 0) return "Свободная планировка";
    if (numberOfRooms == 0.5) return "Студия";
    if (numberOfRooms == 1) return "1 комната";
    if (numberOfRooms == 1.5) return "Еврооднушка";
    if (numberOfRooms == 2 ||
      numberOfRooms == 3 ||
      numberOfRooms == 4
    ) return numberOfRooms + " комнаты";

    if (numberOfRooms == 2.5) return "Евродвушка";
    if (numberOfRooms == 3.5) return "Евротрешка";

    return String(numberOfRooms + " комнат");
  }
}
