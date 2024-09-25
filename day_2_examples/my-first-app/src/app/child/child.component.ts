//step 2: import Input
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

   //step1 : use @Input() decorator next to property that u wish to bind
   @Input() myname!:string;

   myname1!:string;

   constructor()
   {
    this.myname1 = 'Sita';
   }


}
