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

  price: number[] | null;
  priceWeight: number;

  countOfApartmentsFerFloor: number[] | null;
  countOfApartmentsFerWeight: number;

  squarePrice: number[] | null;
  squarePriceWeight: number;

  square: number[] | null;
  squareWeight: number;

  residentialSquare: number[] | null;
  residentialSquareWeight: number;

  squareKitchen: number[] | null;
  squareKitchenWeight: number;

  floor: number[] | null;
  floorWeight: number;
  isLastFloor: boolean;
  isNotFirstFloor: boolean;
  isNotLastFloor: boolean;

  countFloor: number[] | null;
  countFloorWeight: number;

  apartmentType: string[] | null;
  apartmentTypeWeight: number;

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
