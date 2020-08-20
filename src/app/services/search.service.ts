import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

import  *  as  data  from  '../mockdata.json';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  mockData = (data  as  any).default;
  searchedData: Item[] = [];
  searchModeSubject = new Subject<string>();
  lazySearchData: Item[] = [];
  lazySearchDataSubject = new Subject<Item[]>();
  lazySearchDataCount: number = 0;

  constructor() { }

  searchData(searchValue: any) {
    if(this.searchedData.length > 0) {
      this.searchedData = [];
    }
    for(var i = 0; i < this.mockData.length; i++){
      for(var j = 0; j < 3; j++) {
        let keys: string[] = ['id', 'author', 'text'];
        if(this.mockData[i][keys[j]] == searchValue) {
          this.searchedData.push(this.mockData[i]);
        }
      }
    }
    this.reqSearchData(10);
  }

  getSearchData() {
    return [...this.lazySearchData];
  }

  reqSearchData(requestItems: number) {
    if(requestItems > 1) {
      this.lazySearchData = [];
      this.lazySearchDataCount = 0;
    } 
    for (let index = 0; index < requestItems; index++) {
      if (this.lazySearchDataCount < this.searchedData.length) {
        this.lazySearchData.push(this.searchedData[this.lazySearchDataCount]);
        this.lazySearchDataSubject.next(this.lazySearchData);
        this.lazySearchDataCount = this.lazySearchDataCount + 1;
      } else return
    }
  }

}