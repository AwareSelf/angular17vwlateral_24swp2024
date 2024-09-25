import { Component } from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book1.component.html',
  styleUrl: './book1.component.css'
})
export class Book1Component {

  bookarr:Book[];
  book:Book;
   successmsg:string;

  constructor(private bookser:BookService ) //DI - angular injects the bookservice singleton instance
  {
   // this.bookarr = [];
    
    this.bookarr = this.bookser.getAllBooks(); //get all books from backend client bookservice
    this.book = new Book(1,"Angular",1000);
    this.successmsg = '';
  }

  addBook()
  {
  //  this.bookarr.push(this.book);
    
    this.bookser.addbookevent.emit(this.book);
    this.bookser.addNewBook(this.book); //add the newly registered book to book array inside book service
    this.successmsg = "book with bookid:"+this.book.bkid+" added successfully!";
    this.book = new Book(); //create a new book object and bind it to UI form using ngModel
    this.bookarr = this.bookser.getAllBooks();//fetch the latest bookarray from book service 
   
  }
}
