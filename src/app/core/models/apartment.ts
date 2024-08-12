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
