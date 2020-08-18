import { Directive, HostListener, HostBinding } from '@angular/core';
import { WishdataService } from '../services/wishdata.service';

@Directive({
  selector: '[appWishitem]'
})
export class WishitemDirective {

  constructor() { }

  count = 2;
  @HostBinding('style.borderBottom') borderBottom;

  @HostListener('click', ['$event']) wishitem(eventData: Event) {
    let countCheck = this.count % 2;
    if(countCheck == 0) {
      this.borderBottom = '1px solid red';
    } else {
      this.borderBottom = '1px solid transparent';
    }
    this.count += 1;
  }

}
