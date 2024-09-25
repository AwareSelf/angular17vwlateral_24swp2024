import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ComponentIntercommunicationComponent } from './component-intercommunication/component-intercommunication.component';
import { ChildComponent } from './child/child.component';
import { Car } from './model/car';
import { BookComponent } from './book/book.component';
import { Book1Component } from './book1/book1.component';
import { ListbookComponent } from './listbook/listbook.component';
import { HighlightDirective } from './highlight.directive';
import { ChangeText } from './changetext.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TwowaybindingComponent,
             ComponentIntercommunicationComponent,
             ChildComponent,BookComponent,
             Book1Component,ListbookComponent,HighlightDirective,ChangeText
            ],
  templateUrl: './app.component.html',
 /*
   template: `<div class="container">
    {{title}} <br/>
    {{arr.length}} <br/>
    {{2*3}}

</div>`
,
*/
  styleUrl: './app.component.css'

})
export class AppComponent {
  title:string = 'Hello Friends, This i my first angular app!';
  studname:string =  'Nikhil';
  arr:number[] =[31,11,41];
 // arr=[];
  car!:{name:string,power:number};

  carx!:Car;
 
  dis:boolean = true;
  css={color:'#00f', 
       background:'#ccc'};
  name:string="";
  para:string = "center large";
  num:number = 12;

  greet:string = 'app started...';


  constructor()
  {
    this.car = {name:"Swift",power:90};
    this.carx =  new Car("Hondacity",120);

  }

  greetme(str:string):void
  {
    this.greet = str;
  }

  sayHi1():string {
    return "he he he";
  }

  sayHi() : void{
    this.name="Hello user";
   // return "aaa";
  }

  

  reverseString=function(x:string){
    return x.split('').reverse().join('');
  };

  message:string = 'hello child!';

  //@Output example related: capture emitted event counter value from child component
  //into x variable.In response to emitted event call function showVal() from UI.
  x=0;
    
  showVal(count:number){
    console.log(count);
    this.x=count;
  }

  //using *ngIf, @if,@else,@else if
  hybrid=true;
  valid=false;
  

  //usingb *ngFor and @for
  cars=["swift","baleno","fronx"];
  car1={name:"swift",power:90,torque:113};

  mycars =[
    {"name": "swift", "type": "hatchback", "price":810000},
    {"name": "dzire", "type": "hatchback", "price":880000},
    {"name": "ciaz", "type": "sedan", "price":1000000},
    ];

  //using @switch
  day:number=2;  
  
}
