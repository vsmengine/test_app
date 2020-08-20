import { Directive, HostListener, HostBinding } from '@angular/core';
import { WishdataService } from '../services/wishdata.service';

@Directive({
  selector: '[appWishitem]'
})
export class WishitemDirective {

  constructor() { }
  count: number = 2;

  @HostBinding('style.backgroundColor') backgroundColor;
  
  @HostListener('click', ['$event']) wishitem(eventData: Event) {
    let countCheck = this.count % 2;
    if(countCheck == 0) {
      this.backgroundColor = '#ffe0f0';
    } else {
      this.backgroundColor = 'transparent';
    }
    this.count += 1;
  }

}
