import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  // tslint:disable-next-line: no-empty
  constructor() { }

  @HostBinding('class.hoverDirective') isHovered = false;

  @HostListener ('mouseenter') onMouseEnter(){
    this.isHovered = true;
  }

  @HostListener ('mouseleave') onMouseLeave(){
    this.isHovered = false;
  }

}
