import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeText]',
  standalone: true
})
export class ChangeText implements OnInit {

  @HostBinding("value") mytext!:string;
  @HostBinding("style.fontSize") fontsize!:string;

  constructor() { }

  ngOnInit(): void {
   this.mytext = 'namrata';
   this.fontsize = '10px';
  }

  @HostListener('mouseover')
  onhover()
  {
     this.mytext = 'amruta';
     this.fontsize = '30px';
  }

  @HostListener('mouseout')
  onmouseout()
  {
     this.mytext = 'namrata';
     this.fontsize = '10px';
  }

}
