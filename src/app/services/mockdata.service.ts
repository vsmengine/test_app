import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import  *  as  data  from  '../mockdata.json';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor(private http: HttpClient) { }

  mockData = (data  as  any).default;

  lazyListData = [];
  lazyListDataSubject = new Subject<any>();
  lazyListDataCount = 0;

  getListData() {
    return [...this.lazyListData];
  }

  reqListData(requestItems) {
    if(requestItems > 1) {
      this.lazyListData = [];
      this.lazyListDataCount = 0;
    } 
    for (let index = 0; index < requestItems; index++) {
      if (this.lazyListDataCount < this.mockData.length) {
        this.lazyListData.push(this.mockData[this.lazyListDataCount]);
        this.lazyListDataSubject.next(this.lazyListData);
        this.lazyListDataCount = this.lazyListDataCount + 1;
      } else return
    }
  }

}
