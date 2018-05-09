import { Zoo } from './test/obj';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {

  createDb() {
      const zooList = [{
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
    return {zooList};
  }

  constructor() { }

}
