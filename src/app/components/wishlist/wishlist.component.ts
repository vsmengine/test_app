import { Component, OnInit, OnDestroy } from '@angular/core';
import { WishdataService } from 'src/app/services/wishdata.service';
import { Subscription } from 'rxjs';
import { LoaddataService } from 'src/app/services/loaddata.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {

  wishitems: Item[] = [];
  wishItemSubscription : Subscription;

  constructor(
    private wishDataService: WishdataService,
    private loadDataService: LoaddataService
  ) { }

  ngOnInit() {
    this.loadDataService.setCompString('WishData');
    this.loadDataService.loadData(10);
    this.wishitems = this.wishDataService.getWishItems();
    this.wishItemSubscription = this.wishDataService.lazyWishDataSubject.subscribe((subData: Item[]) => {
      this.wishitems = subData;
    });
  }

  onUpdateWish(mockitem: Item) {
    this.wishDataService.updateWishList(mockitem);
  }

  ngOnDestroy() {
    this.wishItemSubscription.unsubscribe();
  }

}
