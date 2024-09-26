import { Component } from '@angular/core';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {

  constructor()
  {
    console.log('Register Book component created...');
  }

  ngOnInit()
  {
    console.log('RegisterBook component rendered and fully initialised');
  }
  ngOnDestroy(): void {
    console.log('Register Book component about to be unloaded/go out of scope/destroyed..');
  }

}
