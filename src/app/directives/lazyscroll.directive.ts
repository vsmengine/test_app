import { Directive, HostListener, OnInit, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { MockdataService } from '../services/mockdata.service';
import { SearchService } from '../services/search.service';
import { LoaddataService } from '../services/loaddata.service';

@Directive({
  selector: '[appLazyscroll]'
})
export class LazyscrollDirective implements OnInit {

  constructor(
    private loadDataService: LoaddataService,
    private mockdataService: MockdataService,
    private searchService: SearchService,
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() { }
  
  @HostListener('window:scroll', ['$event']) lazyscroll(eventData: Event) {
    const noItemRequest = 1; 
    let winScrollTop = document.documentElement.scrollTop;
    let winRestHeight = document.documentElement.offsetHeight - winScrollTop;
    let winInnerHeight = window.innerHeight;

    if( winRestHeight == winInnerHeight ) {
      this.loadDataService.loadData(noItemRequest);
    }
  }; 

}
