export interface Apartment {
  id:bigint;
  numberOfRooms: string;
  address:string;
  date_release:string;
  company:string;
  price:number;
}
export interface ApartmentFull {
  id: bigint;
  photoMainPath: string;
  apartmentNumber: number;
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
  balcony:string;
  priceSqmt: bigint;
  floor: number;
  apartmentType: string;
  kitchen:string;
  roof: string;
  height_roof:string;
  company:string;
  rcomplexDto: {
    address:string;
    type_build:string;
    dueYear: string;
    dueQuart: number;
    parking:string;}
}

export interface ApartmentShortCard {
    id: bigint;
    photoMainPath: string;
    apartmentNumber: number;
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
    type_build: string;
    address:string;
    company:string;
}


export interface ApartmentWEB extends Apartment{
  webid:string;
}

export interface ApartmentFilterSearch {
  priceMin : string;
  priceMax: string;
  areaTotalMin : string;
  areaTotalMax : string;
  numberOfRooms: string[] | null;
}
