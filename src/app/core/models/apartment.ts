export interface ApartmentWEB extends ApartmentShort{
  webid:string;
}

export interface Apartment {
  externalId:number;
  quantityRooms: number;
  square:string;
  type_build:string;
  address:string;
  kitchen:string;
  roof: string;
  date_release:string;
  height_roof:string;
  parking:string;
  company:string;
  price:number;
}
export interface ApartmentShort {
  externalId:number;
  quantityRooms: number;
  square:string;
  type_build:string;
  address:string;
  kitchen:string;
  roof: string;
  date_release:string;
  company:string;
}

export interface ApartmentShortCard {
    id: bigint;
    photoMainPath: string;
    apartmentNumber: number;
    address: string;
    apartmentInfo: string;
    entrance: number;
    numberOfFloorsPerEnt: number;
    areaTotal: number;
    areaKitchen: number;
    areaLiving: number;
    percent: number;
    phone: string;
    priceAfterFormat: string;
    priceSqmtAfterFormat: string;
    webHref: string;
    tags: string;
    countView: bigint;
    status: string;
    statusInfo: string;
    article: string;
    numberOfRooms: string;
    price: bigint;
    priceSqmt: bigint;
    floor: number;
    apartmentType: string;
    dueYear: string;
    dueQuart: number;
}

export interface ApartmentFilterSearch {
  priceMin : number;
  priceMax: number;
  areaTotalMin : number;
  areaTotalMax : number;
  numberOfRooms: string[] | null;
}
