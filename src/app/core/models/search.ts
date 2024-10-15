export interface FilterSearch {

  priceMin : string |'';
  priceMax: string |'';
  areaTotalMin: string |'';
  areaTotalMax : string |'';

  isAtelier: boolean | false;
  isOne: boolean| false;
  isTwo: boolean| false ;
  isThree: boolean| false ;
  isFour: boolean| false ;
  isFivePlus: boolean| false ;
}
export interface ApartmentFilterSearch {
  priceMin: string;
  priceMax: string;
  areaTotalMin: string;
  areaTotalMax: string;
  numberOfRooms: string[] | null;
}

export interface SmartSearch{
  numberOfRooms: number[] | null;
  numberOfRoomsWeight: number;

  plan: number[] | null;
  planWeight: number;

  price: number[] | null;
  priceWeight: number;

  countOfApartmentsFerFloor: number[] | null;
  countOfApartmentsFerWeight: number;

  areaPrice: number[] | null;
  areaPriceWeight: number;

  areaTotal: number[] | null;
  areaWeight: number;

  residentialSquare: number[] | null;
  residentialSquareWeight: number;

  areaKitchen: number[] | null;
  areaLiving: number[] | null;

  floor: number[] | null;
  floorWeight: number;
  isLastFloor: boolean;
  isNotFirstFloor: boolean;
  isNotLastFloor: boolean;

  countFloor: number[] | null;
  countFloorWeight: number;

  apartmentType: number[] | null;
  apartmentTypeWeight: number;
  viewFromWindows:number[] | null;
  viewFromWindowsWeight: number;

  saleType: string[] | null;
  saleTypeWeight: number;

  repair: string[] | null;
  repairWeight: number;


  isBalcony: boolean | null;
  isInsulatedBalcony: boolean;
  isLoggia: boolean;
  balconyWeight: number;

  ceilingHeight: number[] | null;
  ceilingHeightWeight: number;

  houseType: string[] | null;
  houseTypeWeight: number;

  isSmartHome: boolean[] | null;
  isSmartHomeWeight: number;
}
