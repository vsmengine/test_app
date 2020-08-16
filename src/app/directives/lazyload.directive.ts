import { Directive, OnInit, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appLazyload]'
})
export class LazyloadDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let winInnHeight = window.innerHeight;
    let elOffsetTop = this.elRef.nativeElement.offsetTop;
    let index = 0;

    const srcUrl = 'https://www.ll-mm.com/images/placeholders/testimonial-placeholder.jpg';

    //if(elOffsetTop < winInnHeight) {
      // this.elRef.nativeElement.firstElementChild.setAttribute("src", srcUrl);
      // index += 1;
      // console.log(index);
      //console.log('in');
    //}

    //console.log(this.elRef.nativeElement.getBoundingClientRect());

  }

}
