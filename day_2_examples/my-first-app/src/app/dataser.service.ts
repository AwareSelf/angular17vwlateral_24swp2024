import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    data:number[];

    constructor() {
      this.data = [11,12];
      
    }
    
     getData():number[]{
        return this.data.slice();
    }

     addData(no:number):number
     {
       this.data.push(no);
       return this.data.length;
     }
    
}   