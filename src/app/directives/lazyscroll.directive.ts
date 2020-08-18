import { Directive, HostListener, OnInit, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { MockdataService } from '../services/mockdata.service';

@Directive({
  selector: '[appLazyscroll]'
})
export class LazyscrollDirective implements OnInit {

  constructor(private mockdataService: MockdataService) { }

  ngOnInit() { }
  
  @HostListener('window:scroll', ['$event']) lazyscroll(eventData: Event) {
    const noItemRequest = 1; 
    let abc = document.documentElement.scrollTop;
    let qaz = document.documentElement.offsetHeight - document.documentElement.scrollTop;
    let wsx = window.innerHeight;

    if( qaz == wsx ) {
      this.mockdataService.loadData(noItemRequest, 'scrolldown');
    }

    // if(abc == 0) {
    //   this.mockdataService.unloadData(noItemRequest, 'scrollup');
    //   console.log(1);
    // }
    
  }; 


}
