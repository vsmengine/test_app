import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';
import { WishdataService } from '../../services/wishdata.service';
import { Subscription } from 'rxjs';
import { LoaddataService } from '../../services/loaddata.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit, OnDestroy {

  mockitems: Item[] = [];
  addWishItem: boolean = false;
  itemlistSubscription: Subscription;

  constructor(
    private loadDataService: LoaddataService,
    private mockDataService: MockdataService,
    private wishDataService: WishdataService,
  ) { }

  ngOnInit() {
    this.loadDataService.setCompString('ListData');
    this.loadDataService.loadData(10);
    this.mockitems = this.mockDataService.getListData();
    this.itemlistSubscription = this.mockDataService.lazyListDataSubject.subscribe((subData: Item[]) => {
      this.mockitems = subData;
    });
  }

  onUpdateWish(mockitem: Item) {
    this.wishDataService.updateWishList(mockitem);
  }

  ngOnDestroy() {
    this.itemlistSubscription.unsubscribe();
  }

}
