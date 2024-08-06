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

  public getApartment(uid: string): Observable<Object> {
    // return this.http.get('/api/v1/apartments/card/card/${uid}');
     return this.http.get('/test/aparts');
  }
}
