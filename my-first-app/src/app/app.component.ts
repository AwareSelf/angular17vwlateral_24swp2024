import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ComponentIntercommunicationComponent } from './component-intercommunication/component-intercommunication.component';
import { HighlightCustomDirective } from './highlight-custom.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TwowaybindingComponent,
             ComponentIntercommunicationComponent,
             HighlightCustomDirective
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app-23sep24';
  arr=[3,1,4];
  car={name:"Swift",power:90}
  dis = true;
  css={color:'#00f', 
       background:'#ccc'};
  name="";
  para = "center large";



  sayHi(){
    this.name="Hello user";
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
  num=0;

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
