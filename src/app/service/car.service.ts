import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICars } from '../cars';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _url = '/assets/data/cars.json';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<ICars[]> {
    return this.http.get<ICars[]>(this._url).pipe(tap(
      data => JSON.stringify(data)
      //console.log(data);
    ));
  }
}
