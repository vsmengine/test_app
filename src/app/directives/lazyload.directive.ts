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

    const srcUrl = 'https://www.ll-mm.com/images/placeholders/testimonial-placeholder.jpg';

    if(elOffsetTop > winInnHeight) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
      //console.log(this.elRef.nativeElement.getBoundingClientRect().top);
      // index += 1;
      // console.log(index);
      // console.log('in');
    }

  }

}
