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
  isBalcony: boolean;
  isLoggia: boolean;
  isGasStove: boolean;
  isElectricStove: boolean;
  isInsulatedBalcony: boolean;
  isCombined: boolean;
  isSeparate: boolean;
  isTwoBath: boolean;
  isPreFinishing: boolean;
  isFinishing: boolean;
  isEconomyClass: boolean;
  isComfortClass: boolean;
  isBusinessClass: boolean;
  isWithoutFinishing: boolean;
  isWallpaper: boolean;
  isPaint: boolean;
  isPanel: boolean;
  isLincrusta: boolean;
  isPlaster: boolean;
  isBrick: boolean;
  isWithoutWall: boolean;
  isWhiteCeiling: boolean;
  isColorCeiling: boolean;
  isTilesCeiling: boolean;
  isFalseCeiling: boolean;
  isStretchCeiling: boolean;
  isWithoutCeiling: boolean;
  isStoneware: boolean;
  isLinoleum: boolean;
  isLaminate: boolean;
  isParquet: boolean;
  isQuartzvinyl: boolean;
  isWithoutFloor: boolean;
  isCosmeticRep: boolean;
  isEuroRep: boolean;
  isDisignRep: boolean;
  isWithoutRep: boolean;
  isPVH: boolean;
  isVitrazh: boolean;
  isWithoutGlazing: boolean;
  isAluminum: boolean;
  isWithoutDecBathroom: boolean;
  isWithDecBathroom: boolean;
  isBemetalRadtr: boolean;
  isSteelRadtr: boolean;
  isAluminumRadtr: boolean;
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
  bathroomWeight: number;
  stoveWeight: number;
  decorationWeight: number;
  decorationWallWeight: number;
  decorationCeilingWeight: number;
  floorCoveringWeight: number;
  repairTypeWeight: number;
  glazingWeight: number;
  decorationBathroomWeight: number;
  radiatorsWeight: number;
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
  bathroomWeight: number = 0;
  isCombined: boolean = false;
  isSeparate: boolean = false;
  isTwoBath: boolean = false;
  stoveWeight: number = 0;
  isGasStove: boolean = false;
  isElectricStove: boolean = false;
  decorationWeight: number = 0;
  isPreFinishing: boolean = false;
  isFinishing: boolean = false;
  isEconomyClass: boolean = false;
  isComfortClass: boolean = false;
  isBusinessClass: boolean = false;
  isWithoutFinishing: boolean = false;
  decorationWallWeight: number = 0;
  isWallpaper: boolean = false;
  isPaint: boolean = false;
  isPanel: boolean = false;
  isLincrusta: boolean = false;
  isPlaster: boolean = false;
  isBrick: boolean = false;
  isWithoutWall: boolean = false;
  decorationCeilingWeight: number = 0;
  isWhiteCeiling: boolean = false;
  isColorCeiling: boolean = false;
  isTilesCeiling: boolean = false;
  isFalseCeiling: boolean = false;
  isStretchCeiling: boolean = false;
  isWithoutCeiling: boolean = false;
  floorCoveringWeight: number = 0;
  isLinoleum: boolean = false;
  isLaminate: boolean = false;
  isParquet: boolean = false;
  isQuartzvinyl: boolean = false;
  isWithoutFloor: boolean = false;
  isStoneware: boolean = false;
  repairTypeWeight: number = 0;
  isCosmeticRep: boolean= false;
  isEuroRep: boolean= false;
  isDisignRep: boolean= false;
  isWithoutRep: boolean= false;
  glazingWeight: number = 0;
  isPVH: boolean= false;
  isVitrazh: boolean= false;
  isWithoutGlazing: boolean= false;
  isAluminum: boolean= false;
  decorationBathroomWeight: number = 0;
  isWithoutDecBathroom: boolean = false;
  isWithDecBathroom: boolean = false;
  radiatorsWeight: number = 0;
  isBemetalRadtr: boolean = false;
  isSteelRadtr: boolean = false;
  isAluminumRadtr: boolean = false;



}
