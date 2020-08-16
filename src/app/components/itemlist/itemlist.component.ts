import { Component, OnInit, OnChanges } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit, OnChanges {

  mockitems = [];

  constructor(private mockDataService: MockdataService) { 
    this.mockDataService.mockDataSubject.subscribe((subData) => {
      this.mockitems = subData;
    });
  }

  ngOnChanges() {
    // this.mockDataService.mockDataSubject.subscribe((subData) => {
    //   this.mockitems = subData;
    // });
  }

  ngOnInit() {
    // this.mockDataService.mockDataSubject.subscribe((subData) => {
    //   this.mockitems.push(subData);
    // });
  }

}
