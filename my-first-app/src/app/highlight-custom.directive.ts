import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightCustomDirective implements OnInit{

  @Input() bkcolor!:string;

  @HostBinding('style.backgroundColor') bkgcolor:string;

  constructor() {

    console.log('directive constructor called..')
   
    this.bkgcolor = 'green';
  
   }
  ngOnInit(): void {
    console.log('directive oninit called...')
      this.bkgcolor = 'yellow';
      
  }

  @HostListener('click')
  chngbackgrnd()
  {
      this.bkgcolor = 'red';
  }



}

