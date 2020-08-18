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

  @ViewChild('f') serachForm: NgForm;
  @Output() searchStatus = new EventEmitter<any>();
  // isSearchOpen = false;

  constructor(
    private searchDataService: SearchService
  ) { }

  ngOnInit() { }

  onSerachSubmit() {
    let searchValue = this.serachForm.controls['search'].value;
    this.searchDataService.searchData(searchValue);
    this.searchStatus.emit('active');
    // this.toggleSearch();
  }

  // toggleSearch() {
  //   if(this.isSearchOpen === false) {
  //     this.isSearchOpen = true;
  //     this.searchStatus.emit('active');
  //   } else {
  //     return;
  //   }
  // }

  onSearchOpen() {
    this.searchStatus.emit('active');
  }

  onSearchCancel() {
    //this.isSearchOpen = false;
    this.searchStatus.emit('inactive');
  }

}
