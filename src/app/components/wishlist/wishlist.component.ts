import { Component, OnInit, OnDestroy } from '@angular/core';
import { WishdataService } from 'src/app/services/wishdata.service';
import { Subscription } from 'rxjs';
import { LoaddataService } from 'src/app/services/loaddata.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {

  wishitems = [];
  wishItemSubscription : Subscription;

  constructor(
    private wishDataService: WishdataService,
    private loadDataService: LoaddataService
  ) { }

  ngOnInit() {
    this.loadDataService.setCompString('WishData');
    this.loadDataService.loadData(10);
    this.wishitems = this.wishDataService.getWishItems();
    this.wishDataService.lazyWishDataSubject.subscribe((newData) => {
      this.wishitems = newData;
    });
  }

  ngOnDestroy() {
    this.wishItemSubscription.unsubscribe();
  }

}
