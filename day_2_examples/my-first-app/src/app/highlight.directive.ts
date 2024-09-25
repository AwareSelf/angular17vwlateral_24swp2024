import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

 // @Input() startcolor:string = 'yellow';
  @Input() appHighlight:string = 'yellow';
  @Input() onclickcolor:string = 'pink';
 
  @HostBinding('style.backgroundColor') backcolor!:string;

  
  constructor(private hostelementRef:ElementRef,private renderer:Renderer2) { 
   console.log('directive constructor called..');

   

  }
  ngOnInit(): void {
    console.log('ngoninit called for directive - called once associated host element -template abt to be loaded')
      //this.backcolor = this.startcolor;
      console.log("appHighlight value="+this.appHighlight);
       this.backcolor = this.appHighlight;
  }

  @HostListener('click')
  onclick()
  {
    console.log('click handler of directive appHighlight called..');
    //this.backcolor = 'lightblue';
    this.backcolor = this.onclickcolor;

    //using Renderer2 service to append child element on click event
   const div = this.renderer.createElement('div');
   const text = this.renderer.createText('Hello world!');
   this.renderer.appendChild(div, text);
   this.renderer.appendChild(this.hostelementRef.nativeElement, div);
  }

  /*
  @HostListener('mouseover')
  onmousehover()
  {
    this.backcolor = 'green';
  }

  @HostListener('mouseout')
  onmouseout()
  {
    this.backcolor = 'pink';
  }
    */


 

}
