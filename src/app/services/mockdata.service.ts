import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import  *  as  data  from  '../mockdata.json';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  mockData = (data  as  any).default;

  lazyListData = [];
  lazyListDataSubject = new Subject<any>();
  lazyListDataCount = 0;

  constructor(private http: HttpClient) { }

  getListData() {
    return [...this.lazyListData];
  }

  reqListData(requestItems) {
    for (let index = 0; index < requestItems; index++) {
      if (this.lazyListDataCount < this.mockData.length) {
        this.lazyListData.push(this.mockData[this.lazyListDataCount]);
        this.lazyListDataSubject.next(this.lazyListData);
        this.lazyListDataCount = this.lazyListDataCount + 1;
      }
    }
  }

  //mockData = [];
  //mockDataSubject = new Subject<any>();

  // randomText(length: Number) {
  //   let resultText = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   const charactersLength = characters.length;
  //   for ( var i = 0; i < length; i++ ) {
  //     resultText += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return resultText;
  // }

  // requestData() {
  //   const length = 20;
  //   for (let index = 0; index < 15; index++) {
  //     this.http.get(`https://picsum.photos/id/${index}/info`).pipe(
  //       map((value) => {
  //         let obj = {
  //         'id': index,
  //         'photo': value['download_url'],
  //         'author': value['author'],
  //         'text': this.randomText(length),
  //         };
  //         return obj;
  //       })
  //     ).subscribe((value) => {
  //       this.mockData.push(value);
  //       this.mockDataSubject.next(this.mockData);
  //     });
  //   }
  // }

}
