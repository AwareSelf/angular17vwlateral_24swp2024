import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookRegisterComponent } from './bookregister/bookregister.component';
import { FormsModule } from '@angular/forms';
import { EmpreactiveComponent } from './empreactive/empreactive.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,
             BookRegisterComponent, EmpreactiveComponent
             ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angformsex';
}
