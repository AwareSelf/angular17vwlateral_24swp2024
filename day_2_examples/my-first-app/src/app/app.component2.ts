import { Component } from '@angular/core';
import { DataService } from './dataser.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[],
  templateUrl: './app.component2.html',
  styleUrl: './app.component.css',
})
export class AppComponent2 {
  title = 'myApp';

  data:number[];
  datasize:number;

  constructor(private dataservice: DataService){ 
    this.data=this.dataservice.getData();
    this.datasize =  this.data.length;
  }

  saveData(val:number)
  {
    this.datasize = this.dataservice.addData(val);
  }

}  