import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';
import { LoaddataService } from 'src/app/services/loaddata.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-mockdata',
  templateUrl: './mockdata.component.html',
  styleUrls: ['./mockdata.component.scss']
})
export class MockdataComponent implements OnInit {

  searchMode = 'inactive';
  
  constructor(
    private loadDataService: LoaddataService,
    private searchDataService: SearchService
  ) { }

  ngOnInit() { 
    this.searchDataService.searchModeSubject.subscribe((status) => {
      this.searchMode = status;
    });
  }

}
