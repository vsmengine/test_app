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
  updatedMockData = [];
  mockDataSubject = new Subject<any>();
  dataCount = 0;

  constructor(private http: HttpClient) { }

  loadData(noReqItems: Number, scrollDirection: String) {
    let loadItems = noReqItems;
    let scrollDir = scrollDirection;
    // if(loadItems == 1) {
    //   this.updatedMockData.shift();
    //   console.log('load');
    // }
    for (let index = 0; index < loadItems; index++) {
      this.updatedMockData.push(this.mockData[this.dataCount]);
      this.mockDataSubject.next(this.updatedMockData);
      this.dataCount = this.dataCount + 1;
    }
    console.log(this.updatedMockData);
  }

  // unloadData(noReqItems: Number, scrollDirection: String) {
  //   let loadItems = noReqItems;
  //   let scrollDir = scrollDirection;
  //   if(loadItems == 1) {
  //     this.updatedMockData.pop();
  //     console.log('unload');
  //   }
  //   for (let index = 0; index < loadItems; index++) {
  //     this.updatedMockData.unshift(this.mockData[this.dataCount-11]);
  //     this.mockDataSubject.next(this.updatedMockData);
  //     this.dataCount = this.dataCount - 1;
  //   }
  //   console.log(this.updatedMockData);
  // }



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
