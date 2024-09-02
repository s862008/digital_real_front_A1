export interface RComplex {
  id:bigint;
  name: string;
  address:string;
  company:string;
  priceMax:number;
  priceMin:number;
  phone:string;
}

export interface RComplexPopular extends RComplex{
orderByRooms:any;
countApartments:number;

}

