import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApartmentFilterSearch} from "../models/apartment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<any> {
    return this.http.get('/test/cnt');
  }
  public getApartment(id: string): Observable<Object> {

    return this.http.get(`/test/apart/${id}`);
  }
  public getSimillarApartments(uid: string): Observable<Object> {

     return this.http.get('/test/aparts');
  }


  public search(toSearch: ApartmentFilterSearch, size: number, page: number): Observable<Object> {
    return this.http.post(`/api/v1/apartments/all?size=${size}&page=${page}`, toSearch);
  }

  loadPrepearInfo(toSearch: ApartmentFilterSearch):Observable<Object> {
    return this.http.post(`/api/v1/apartments/count`, toSearch);
  }

}
