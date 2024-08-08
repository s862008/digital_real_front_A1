export interface ApartmentWEB extends ApartmentShort{
  webid:string;
}

export interface Apartment {
  id:number;
  room: string;
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
  id:number;
  room: string;
  square:string;
  type_build:string;
  address:string;
  kitchen:string;
  roof: string;
  date_release:string;
  company:string;
}
