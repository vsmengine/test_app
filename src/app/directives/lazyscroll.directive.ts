import { Directive, HostListener, OnInit } from '@angular/core';
import { MockdataService } from '../services/mockdata.service';

@Directive({
  selector: '[appLazyscroll]'
})
export class LazyscrollDirective implements OnInit {

  constructor(private mockdataService: MockdataService) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event']) lazyscroll(eventData: Event) {
    const noItemRequest = 1; 
    const itemHeight = 0;
    let qaz = document.documentElement.offsetHeight - document.documentElement.scrollTop;
    let wsx = window.innerHeight + (noItemRequest*itemHeight);

    if( qaz == wsx ) {
      this.mockdataService.requestData();
    }
    
    // let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    // let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    // if(pos == max )   {
    // }

    // console.log(document.body.scrollTop);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.offsetHeight);
    // console.log(document.documentElement.scrollHeight);
    // console.log(window.innerHeight);
  }; 

}
