import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { LoaddataService } from 'src/app/services/loaddata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchMode: string = 'inactive';
  @ViewChild('searchForm') serachForm: NgForm;

  constructor(
    private searchDataService: SearchService
  ) { }
  
  ngOnInit() { 
    this.searchDataService.searchModeSubject.subscribe((status: string) => {
      this.searchMode = status;
    });
  }

  onSerachSubmit() {
    let searchValue = this.serachForm.controls['search'].value;
    this.searchDataService.searchData(searchValue);
    this.searchDataService.searchModeSubject.next('active');
  }

  onSearchOpen() {
    this.searchDataService.searchModeSubject.next('active');
  }

  onSearchCancel() {
    this.searchDataService.searchModeSubject.next('inactive');
  }

}
