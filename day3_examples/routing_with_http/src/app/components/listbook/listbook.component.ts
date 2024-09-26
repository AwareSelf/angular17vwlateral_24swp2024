import { Component } from '@angular/core';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  constructor()
  {
    console.log('ListBook component created...');
  }

  ngOnInit()
  {
    console.log('ListBook component rendered and fully initialised');
  }

  ngOnDestroy(): void {
    console.log('ListBook component about to be unloaded/go out of scope/destroyed..');
  }

}
