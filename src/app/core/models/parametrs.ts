import {SmartParametrsComponent} from "../../main/components/smart-parametrs/smart-parametrs.component";
import {inject, Injectable} from "@angular/core";

interface Parametrs {

  isApartments: boolean
  isFlat: boolean
  isIsolatePlan: boolean
  isBlandPlan: boolean
  isNotFirstFloor: boolean
  isNotLastFloor: boolean;
  isLastFloor: boolean;


}

export interface iSmartParametrs extends Parametrs {
  planWeight: number;
  apartmentTypeWeight: number;
  floorWeight: number;

}
@Injectable({ providedIn: 'root' })
export class SmartParametrs implements  iSmartParametrs{
  apartmentTypeWeight: number =2;
  isApartments: boolean= false;
  isBlandPlan: boolean= false;
  isFlat: boolean= false;
  isIsolatePlan: boolean= false;
  planWeight: number= 0;
  floorWeight: number;
  floorMin: number=0;
  floorMax: number=100;
  isNotFirstFloor: boolean= false;
  isNotLastFloor: boolean= false;
  isLastFloor: boolean= false;
  countFloorWeight!: number;

}
