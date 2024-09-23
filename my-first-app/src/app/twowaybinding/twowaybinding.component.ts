import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {
  name = 'neeta';
  name1 = 'namrata';
  name2 = 'arjun';

  updateName(x:Event){
    //this.name=x.target.value;
    this.name1=(x.target as HTMLInputElement).value;
  };

}
