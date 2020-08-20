import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const storageWishList = 'wish-list-storage';
// const storageWishId = 'wish-id-storage';

@Injectable({
  providedIn: 'root'
})
export class WishdataService {

  private wishList = [];
  initWishList = []

  lazyWishData = [];
  lazyWishDataSubject = new Subject<any>();
  lazyWishDataCount = 0;

  // wishIdList = [];
  // statusWishIdSubject = new Subject<any>();


  constructor() { 
    this.wishList = JSON.parse(localStorage.getItem(storageWishList)) || this.initWishList;
    // this.wishIdList = JSON.parse(localStorage.getItem(storageWishId));
  }

  reqWishData(requestItems) {
    if(requestItems > 1) {
      this.lazyWishData = [];
      this.lazyWishDataCount = 0;
    } 
    for (let index = 0; index < requestItems; index++) {
      if (this.lazyWishDataCount < this.wishList.length) {
        this.lazyWishData.push(this.wishList[this.lazyWishDataCount]);
        this.lazyWishDataSubject.next(this.lazyWishData);
        this.lazyWishDataCount = this.lazyWishDataCount + 1;
      } else return
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
  }

  private addWishItem(wishitem) {
    this.wishList.push(wishitem);
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
    localStorage.setItem(storageWishList, JSON.stringify(this.wishList));
    // localStorage.setItem(storageWishId, JSON.stringify(this.wishList));
    this.lazyWishDataSubject.next(this.lazyWishData);
  }


}
