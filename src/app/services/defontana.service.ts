import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class DefontanaService {

  constructor(private http: HttpClient) { }

  readTest(): Observable<Test[]> {
    const endpoint = 'https://test.defontana.com'
    return this.http.get<{ data: Test[] }>(endpoint)
      .pipe(map((obj) => obj.data))
      .pipe(map((obj) => obj.map((item) => {
        item.ID = +item.ID
        return item
      })))
  }
}
