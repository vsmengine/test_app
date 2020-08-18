import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';

@Component({
  selector: 'app-mockdata',
  templateUrl: './mockdata.component.html',
  styleUrls: ['./mockdata.component.scss']
})
export class MockdataComponent implements OnInit {
  
  constructor(private mockdataService: MockdataService) { }

  ngOnInit() {
    this.mockdataService.loadData(10, 'scrolldown');
  }

}
