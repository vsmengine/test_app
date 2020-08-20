import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

const storageWishList = 'wish-list-storage';
// const storageWishId = 'wish-id-storage';

@Injectable({
  providedIn: 'root'
})
export class WishdataService {

  wishList: Item[] = [];
  initWishList: Item[] = []

  lazyWishData: Item[] = [];
  lazyWishDataSubject = new Subject<Item[]>();
  lazyWishDataCount: number = 0;

  constructor() { 
    this.wishList = JSON.parse(localStorage.getItem(storageWishList)) || this.initWishList;
  }

  reqWishData(requestItems: number) {
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

  updateWishList(wishitem: Item) {
    if(this.findItemIndex(wishitem) >= 0) {
      this.removeWishItem(wishitem);
    } else {
      this.addWishItem(wishitem);
    }
  }

  private addWishItem(wishitem: Item) {
    this.wishList.push(wishitem);
    this.update();
  }

  private removeWishItem(wishitem: Item) {
    this.wishList.splice(this.findItemIndex(wishitem), 1);
    this.lazyWishData.splice(this.findItemIndex(wishitem), 1);
    this.update();
  }

  private findItemIndex(wishitem: Item) {
    for (let index = 0; index < this.wishList.length; index++) {
      if(this.wishList[index]['id'] == wishitem['id']) {
        console.log(index);
        return index;
      }   
    }
  }

  private update() {
    localStorage.setItem(storageWishList, JSON.stringify(this.wishList));
    this.lazyWishDataSubject.next(this.lazyWishData);
  }


}
