import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MockdataService } from './mockdata.service';
import { SearchService } from './search.service';
import { WishdataService } from './wishdata.service';

@Injectable({
  providedIn: 'root'
})
export class LoaddataService {

  viewString: string;

  constructor(
    private mockDataService : MockdataService,
    private searchDataService : SearchService,
    private wishDataService : WishdataService
  ) { }

  setCompString(compString: string) {
    this.viewString = compString;
  }

  loadData(noReqItems: number) {
    let loadItems = noReqItems;
    if(this.viewString === 'ListData') {
      this.mockDataService.reqListData(loadItems);
    } else if(this.viewString === 'SearchData') {
      this.searchDataService.reqSearchData(loadItems);
    } else if(this.viewString === 'WishData') {
      this.wishDataService.reqWishData(loadItems);
    }
  }

}
