import {SmartParametrsComponent} from "../../main/components/smart-parametrs/smart-parametrs.component";
import {inject, Injectable} from "@angular/core";

interface Parametrs {
  isAtelier: boolean
  isOne: boolean
  isTwo: boolean
  isThree: boolean
  isFour: boolean
  isOneEuro: boolean
  isTwoEuro: boolean
  isThreeEuro: boolean
  isFreeLayout: boolean
  isFivePlus: boolean
  isApartments: boolean
  isFlat: boolean
  isIsolatePlan: boolean
  isBlandPlan: boolean
  isNotFirstFloor: boolean
  isNotLastFloor: boolean;
  isLastFloor: boolean;
  countFloorMin: number;
  countFloorMax: number;
  areaTotalMin: number;
  areaTotalMax: any;
  areaLivingMin: any;
  areaLivingMax: any;
  areaKitchenMax: any;
  areaKitchenMin: any;
  priceWeight: number;
  priceMin: number;
  areaPriceMin: number;
  areaPriceMax: number;
  isViewYard: boolean;
  isViewStreet: boolean;
  isViewSunnySide: boolean;
  isViewBothSide: boolean;
  isViewWestSide: boolean;
  isViewNorthSide: boolean;
  isSouthBothSide: boolean;
  isViewEastSide: boolean;
  balconyWeight: any;
  isBalcony: any;
  isLoggia: any;
  isInsulatedBalcony: any;
}

export interface iSmartParametrs extends Parametrs {
  planWeight: number;
  apartmentTypeWeight: number;
  floorWeight: number;
  countFloorWeight: number;
  areaWeight: number;
  priceMax: number;
  areaPriceWeight: number;
  numberOfRoomsWeight: number;
  viewFromWindowsWeight: number;
  balconyWeight: number;
}

@Injectable({providedIn: 'root'})
export class SmartParametrs implements iSmartParametrs {
  apartmentTypeWeight: number = 2;
  isApartments: boolean = false;
  isBlandPlan: boolean = false;
  isFlat: boolean = false;
  isIsolatePlan: boolean = false;
  planWeight: number = 0;
  floorWeight: number = 0;
  floorMin: number = 0;
  floorMax: number = 100;
  isNotFirstFloor: boolean = false;
  isNotLastFloor: boolean = false;
  isLastFloor: boolean = false;
  countFloorWeight: number = 0;
  countFloorMin!: number;
  countFloorMax!: number;
  areaWeight: number = 0;
  areaTotalMin!: number;
  areaTotalMax!: number;
  areaLivingMin!: number;
  areaLivingMax!: number;
  areaKitchenMax!: number;
  areaKitchenMin!: number;
  priceWeight!: number;
  priceMin !: number;
  priceMax !: number;
  areaPriceWeight: number = 0;
  areaPriceMin!: number;
  areaPriceMax!: number;
  numberOfRoomsWeight: number = 0;

  public isAtelier: boolean = false;
  public isOne: boolean = false;
  public isTwo: boolean = false;
  public isThree: boolean = false;
  public isFour: boolean = false;
  public isOneEuro: boolean = false;
  public isTwoEuro: boolean = false;
  public isThreeEuro: boolean = false;
  public isFreeLayout: boolean = false;
  public isFivePlus: boolean = false;
  viewFromWindowsWeight: number = 0;
  isViewYard: boolean = false;
  isViewStreet: boolean = false;
  isViewSunnySide: boolean = false;
  isViewBothSide: boolean = false;
  isViewWestSide: boolean = false;
  isViewNorthSide: boolean = false;
  isSouthBothSide: boolean = false;
  isViewEastSide: boolean = false;
  balconyWeight: number = 0;
  isBalcony: boolean = false;
  isLoggia: boolean = false;
  isInsulatedBalcony: boolean = false;


}
