import { Injectable } from '@angular/core';
import {Filter} from "../models/filter";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterData: Filter = {
    priceMin: '0',
    priceMax: '1000000',
    areaTotalMin: '0',
    areaTotalMax: '50',
    isAtelier: false,
    isOne: false,
    isTwo: false,
    isThree: false,
    isFour: false,
    isFivePlus: false
  };

  setFilterData(data: Filter) {
    this.filterData = data;
  }

  getFilterData() {
    return this.filterData;
  }

  clearFilterData(){
    return this.filterData = {
    priceMin: '',
    priceMax: '',
    areaTotalMin: '',
    areaTotalMax: '',
    isAtelier: false,
    isOne: false,
    isTwo: false,
    isThree: false,
    isFour: false,
    isFivePlus: false
  };
}
}
