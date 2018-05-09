import { Zoo } from './test/obj';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/Operators';

@Injectable()
export class DataService {

  zooList: Zoo [] = [{
  position : 'toronto',
  size : 200
  }, {
  position : 'london',
  size : 230
  }, {
  position : 'beijing',
  size : 1000
  }, {
  position : 'new york',
  size : 500
  }];

  constructor(private http: HttpClient) { }


  getList(): Observable<Zoo[]> {
    return of(this.zooList);
  }
}
