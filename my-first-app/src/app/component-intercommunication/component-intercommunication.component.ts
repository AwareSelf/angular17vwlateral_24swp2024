import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-intercommunication',
  standalone: true,
  imports: [],
  templateUrl: './component-intercommunication.component.html',
  styleUrl: './component-intercommunication.component.css'
})
export class ComponentIntercommunicationComponent {

  @Input() greet:string = '';

  @Output() changeValue=new EventEmitter<number>();
  counter=0;

  changedValue(){
      this.counter=this.counter+1;
      this.changeValue.emit(this.counter);
    }
}
