import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDir {
  @HostBinding('style.backgroundColor') bg : string = "white" ;
  @HostBinding('style.color') cl : string = "black";
  constructor() { }
@HostListener('mouseenter') mouseenter() {
 this.bg = "grey";
 this.cl = "white"   
    
  }
  
@HostListener('mouseleave') mouseleave() {
 this.bg = "white";
 this.cl = "black"   
    
  }
}
