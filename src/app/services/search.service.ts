import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

import  *  as  data  from  '../mockdata.json';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  mockData = (data  as  any).default;
  searchedData = [];

  // updatedSearchData = [];
  // searchDataSubject = new Subject<any>();
  // dataCount = 0;

  lazySearchData = [];
  lazySearchDataSubject = new Subject<any>();
  lazySearchDataCount = 0;

  constructor() { }

  searchData(searchValue) {
    if(this.searchedData.length > 0 || this.lazySearchData.length > 0) {
      this.searchedData = [];
      this.lazySearchData = [];
    }
    for(var i = 0; i < this.mockData.length; i++){
      for(var j = 0; j < 3; j++) {
        let keys =['id', 'author', 'text'];
        if(this.mockData[i][keys[j]] == searchValue) {
          this.searchedData.push(this.mockData[i]);
        }
      }
    }
    this.lazySearchDataCount = 0;
    this.reqSearchData(10);
  }

  getSearchData() {
    return [...this.lazySearchData];
  }

  reqSearchData(requestItems) {
    for (let index = 0; index < requestItems; index++) {
      if (this.lazySearchDataCount < this.searchedData.length) {
        this.lazySearchData.push(this.searchedData[this.lazySearchDataCount]);
        this.lazySearchDataSubject.next(this.lazySearchData);
        this.lazySearchDataCount = this.lazySearchDataCount + 1;
      }
    }
  }

  // loadData(noReqItems: Number) {
  //   let loadItems = noReqItems;
  //   for (let index = 0; index < loadItems; index++) {
  //     this.updatedSearchData.push(this.searchedData[this.dataCount]);
  //     this.searchDataSubject.next(this.updatedSearchData);
  //     this.dataCount = this.dataCount + 1;
  //   }
  //   console.log('search service');
  // }

}