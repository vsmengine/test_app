import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const storageName = 'wish-list-storage';

@Injectable({
  providedIn: 'root'
})
export class WishdataService {

  private wishList = [];
  initWishList = [
    // {"id": 0, "photo": "https://picsum.photos/id/0/5616/3744", "author": "Alejandro Escamilla", "text": "ZxCjBtVYO4LGVYS2fGnM"},
    // {"id": 1, "photo": "https://picsum.photos/id/1/5616/3744", "author": "Alejandro Escamilla", "text": "mPEs7eSSDpfrr39yuEzn"},
    // {"id": 2, "photo": "https://picsum.photos/id/2/5616/3744", "author": "Alejandro Escamilla", "text": "6Rjy6dcLkdHhtdTXHqCs"},
    // {"id": 3, "photo": "https://picsum.photos/id/3/5616/3744", "author": "Alejandro Escamilla", "text": "YPCpof7IM2RgWseBD3xX"},
    // {"id": 4, "photo": "https://picsum.photos/id/4/5616/3744", "author": "Alejandro Escamilla", "text": "7ICQVE1bQikZHAWHWjlH"},
    // {"id": 5, "photo": "https://picsum.photos/id/5/5245/3497", "author": "Alejandro Escamilla", "text": "LUtmSZtCZnrNwdk5LIiy"},
    // {"id": 6, "photo": "https://picsum.photos/id/6/5616/3744", "author": "Alejandro Escamilla", "text": "qxcxJCoJeXBqA0GwMwjC"},
    // {"id": 7, "photo": "https://picsum.photos/id/7/4728/3168", "author": "Alejandro Escamilla", "text": "ux4FGD4w5KEtl8tV3L59"},
    // {"id": 8, "photo": "https://picsum.photos/id/8/5616/3744", "author": "Alejandro Escamilla", "text": "C3XW96BOZpLM19A11S8F"},
    // {"id": 9, "photo": "https://picsum.photos/id/9/5616/3672", "author": "Alejandro Escamilla", "text": "YffM5SN1cvslKYWoo1Gg"},
    // {"id": 10, "photo": "https://picsum.photos/id/10/2500/1667", "author": "Paul Jarvis", "text": "keg9DZUYFoHLaJm3yc8o"},
    // {"id": 11, "photo": "https://picsum.photos/id/11/2500/1667", "author": "Paul Jarvis", "text": "CKkdOCMVqKLfy2kwbzYt"},
    // {"id": 12, "photo": "https://picsum.photos/id/12/2500/1667", "author": "Paul Jarvis", "text": "x4aQXfCkm93ml0gtHFEk"},
    // {"id": 13, "photo": "https://picsum.photos/id/13/2500/1667", "author": "Paul Jarvis", "text": "8A6PSafbyIafBrdDh8JF"},
    // {"id": 14, "photo": "https://picsum.photos/id/14/2500/1667", "author": "Paul Jarvis", "text": "2fgCxPHsEjhSQnLZB4u6"},
    // {"id": 15, "photo": "https://picsum.photos/id/15/5245/3497", "author": "Alejandro Escamilla", "text": "LUtmSZtCZnrNwdk5LIiy"},
    
  ]
  
  lazyWishData = [];
  lazyWishDataSubject = new Subject<any>();
  lazyWishDataCount = 0;
  // wishlistItemIndex;

  constructor() { 
    this.wishList = JSON.parse(localStorage.getItem(storageName)) || [];
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
      console.log('exist');
      this.removeWishItem(wishitem);
    } else {
      this.addWishItem(wishitem);
    }
  }

  private addWishItem(wishitem) {
    this.wishList.push(wishitem);
    this.update();
    console.log(this.wishList);
  }

  private removeWishItem(wishitem) {
    this.wishList.splice(this.findItemIndex(wishitem), 1);
    this.update();
    console.log(this.wishList);
  }

  private findItemIndex(wishitem) {
    for (let index = 0; index < this.wishList.length; index++) {
      if(this.wishList[index]['id'] == wishitem['id']) {
        console.log(index);
        return index;
      }   
    }
  }

  // private findItemIndex(wishitem) {
  //   return this.wishList.indexOf(wishitem);
  // }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.wishList));
  }


}
