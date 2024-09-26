import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang_routing_ex1';

  constructor(private router:Router)
  {

  }

  navSearch(idval:number)
  {
    //instead of clicking on routerLink, navigate programmatically on particular event
    //nav to particular route
    console.log('you want to search book with bookid:'+idval);
      this.router.navigate(['searchbook',idval]); //  /seachbook/4
  }
}
