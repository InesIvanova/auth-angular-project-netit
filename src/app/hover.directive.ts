import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private htmlElement: ElementRef) { 
    this.makeColorRed('lightGrey');
  }

  makeColorRed(color) {
    this.htmlElement.nativeElement.style.backgroundColor = color;
    this.htmlElement.nativeElement.style.color = 'red';
  }

}
