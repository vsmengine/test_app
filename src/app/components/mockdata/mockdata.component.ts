import { Component, OnInit } from '@angular/core';
import { MockdataService } from '../../services/mockdata.service';

@Component({
  selector: 'app-mockdata',
  templateUrl: './mockdata.component.html',
  styleUrls: ['./mockdata.component.scss']
})
export class MockdataComponent implements OnInit {

  constructor(private mockdataService: MockdataService) { }

  ngOnInit(): void {
    // for (let index = 0; index < 40; index++) {
    //   let paramId = index;
    //   const charLength = 10;
    //   this.mockdataService.requestData(paramId, charLength);
    // };
    this.mockdataService.requestData();
  }

}
