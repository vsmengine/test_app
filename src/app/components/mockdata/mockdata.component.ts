import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';
import { LoaddataService } from 'src/app/services/loaddata.service';

@Component({
  selector: 'app-mockdata',
  templateUrl: './mockdata.component.html',
  styleUrls: ['./mockdata.component.scss']
})
export class MockdataComponent implements OnInit {

  searchMode = 'inactive';
  
  constructor(private loadDataService: LoaddataService) { }

  ngOnInit() { }

  switchSearchMode(status) {
    this.searchMode = status;
  }

}
