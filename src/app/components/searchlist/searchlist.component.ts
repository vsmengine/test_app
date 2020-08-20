import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';
import { LoaddataService } from '../../services/loaddata.service';
import { WishdataService } from 'src/app/services/wishdata.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})
export class SearchlistComponent implements OnInit, OnDestroy {

  searchitems: Item[] = [];
  addWishItem: boolean = false;
  searchItemSubscription: Subscription;

  constructor(
    private loadDataService: LoaddataService,
    private searchDataService: SearchService,
    private wishDataService: WishdataService
  ) { }

  ngOnInit() {
    this.loadDataService.setCompString('SearchData');
    this.searchitems = this.searchDataService.getSearchData();
    this.searchItemSubscription = this.searchDataService.lazySearchDataSubject.subscribe((subData: Item[]) => {
      this.searchitems = subData;
    });
  }

  onUpdateWish(searchitem: Item) {
    this.wishDataService.updateWishList(searchitem);
  }

  ngOnDestroy() {
    this.searchItemSubscription.unsubscribe();
  }

}
