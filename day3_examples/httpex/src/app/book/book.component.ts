import { Component } from '@angular/core';
import { Book } from './book.model';
import { BooserService } from '../booser.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book:Book;
  bkarr:Book[];

  constructor(private bookser:BooserService)
  {
    this.book = new Book();
    this.bkarr=[];

  }

  addbook()
  {
     this.bookser.addbook(this.book);
     this.book = new Book();
  }

  getBooks()
  {
    this.bookser.getAllBooks().subscribe((bookarr:Book[])=>{

      console.log('get successful:'+bookarr.length);
      this.bkarr = bookarr;
      console.log(this.bkarr);

     
      
    });
  }

}
