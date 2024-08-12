import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<any> {
    return this.http.get('/test/cnt');
  }
  public getApartment(ex_id: string): Observable<Object> {

    return this.http.get(`/test/apart/${ex_id}`);
  }
  public getSimillarApartments(uid: string): Observable<Object> {

     return this.http.get('/test/aparts');
  }
}
