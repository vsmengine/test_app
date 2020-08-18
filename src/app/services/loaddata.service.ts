import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MockdataService } from './mockdata.service';
import { SearchService } from './search.service';
import { WishdataService } from './wishdata.service';

@Injectable({
  providedIn: 'root'
})
export class LoaddataService {

  componentString;

  constructor(
    private mockDataService : MockdataService,
    private searchDataService : SearchService,
    private wishDataService : WishdataService
  ) { }

  setCompString(compString) {
    this.componentString = compString;
  }

  loadData(noReqItems: Number) {
    let loadItems = noReqItems;
    if(this.componentString === 'ListData') {
      this.mockDataService.reqListData(loadItems);
    } else if(this.componentString === 'SearchData') {
      this.searchDataService.reqSearchData(loadItems);
    } else if(this.componentString === 'WishData') {
      this.wishDataService.reqWishData(loadItems);
    }
  }

}
