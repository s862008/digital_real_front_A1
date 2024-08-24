export interface Filter {

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
