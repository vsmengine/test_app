import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const storageName = 'wish-list-storage';

@Injectable({
  providedIn: 'root'
})
export class WishdataService {

  private wishList = [];
  initWishList = []
  
  lazyWishData = [];
  lazyWishDataSubject = new Subject<any>();
  // statusWishDataSubject = new Subject<any>();
  lazyWishDataCount = 0;

  constructor() { 
    this.wishList = JSON.parse(localStorage.getItem(storageName)) || this.initWishList;
  }

  reqWishData(requestItems) {
    for (let index = 0; index < requestItems; index++) {
      if (this.lazyWishDataCount < this.wishList.length) {
        this.lazyWishData.push(this.wishList[this.lazyWishDataCount]);
        this.lazyWishDataSubject.next(this.lazyWishData);
        this.lazyWishDataCount = this.lazyWishDataCount + 1;
      }
    }
  }

  getWishItems() {
    return [...this.lazyWishData];
  }

  updateWishList(wishitem) {
    if(this.findItemIndex(wishitem) >= 0) {
      this.removeWishItem(wishitem);
    } else {
      this.addWishItem(wishitem);
    }
    // this.statusWishDataSubject.next(wishitem['id']);
  }

  private addWishItem(wishitem) {
    this.wishList.push(wishitem);
    this.lazyWishData.push(wishitem);
    this.update();
  }

  private removeWishItem(wishitem) {
    this.wishList.splice(this.findItemIndex(wishitem), 1);
    this.lazyWishData.splice(this.findItemIndex(wishitem), 1);
    this.update();
  }

  private findItemIndex(wishitem) {
    for (let index = 0; index < this.wishList.length; index++) {
      if(this.wishList[index]['id'] == wishitem['id']) {
        console.log(index);
        return index;
      }   
    }
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.wishList));
    this.lazyWishDataSubject.next(this.lazyWishData);
  }


}
