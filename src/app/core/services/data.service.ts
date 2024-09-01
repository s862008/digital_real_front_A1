import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApartmentFilterSearch} from "../models/apartment";
import {Gallery} from "../models/gallery";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getApartmentFull(id: string): Observable<Object> {
    return this.http.get(`/api/v1/apartments/full/${id}`);
  }

  public search(toSearch: ApartmentFilterSearch, size: number, page: number): Observable<Object> {
    return this.http.post(`/api/v1/apartments/all?size=${size}&page=${page}`, toSearch);
  }

  public loadPrepearInfo(toSearch: ApartmentFilterSearch): Observable<Object> {
    return this.http.post(`/api/v1/apartments/count`, toSearch);
  }

  public getApartmentGallery(id: string): Observable<any> {
    return this.http.get(`/api/v1/apartments/gallery/${id}`);
  }
   public  getRComplex(param: {method: string; id:string,limit:number }): Observable<Object> {
   if(param.method == "suggest")
     return this.http.get(`/api/v1/rcomplex/suggest`);
  }

  //---------------------------------------------------

  getData(id: string): Observable<any> {
    return this.http.get('/test/cnt');
  }

  public getApartment(id: string): Observable<Object> {

    return this.http.get(`/test/apart/${id}`);
  }

  public searchSimillarApartments(id: string): Observable<Object> {

    return this.http.get(`/test/aparts/${id}`);
  }

  //---------------------------------------------------

}
