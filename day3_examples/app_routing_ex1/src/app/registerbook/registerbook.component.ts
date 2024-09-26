import { Component, OnInit,OnDestroy } from '@angular/core';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { BookHttpService } from '../bookhttp.service';

@Component({
  //selector: 'app-registerbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent implements OnInit,OnDestroy {

    book!:Book;
   successmsg:string;

  //constructor(private bookser:BookService ) //DI - angular injects the bookservice singleton instance
  constructor(private bookser:BookHttpService)
  {
   
    this.book = new Book(1,"Angular",1000);
    this.successmsg = '';
  }
  ngOnInit(): void {
    console.log('register book initialized, oninit called.');
  }
  ngOnDestroy(): void {
    console.log('register book ondestroy called, abt to be detsroyed.');
  }

  addBook()
  {
   
    let bkid = this.book.id;
    this.bookser.addNewBook(this.book).subscribe(()=>{
      this.successmsg = "book with bookid:"+bkid+" added successfully!";
    })

    this.book = new Book(); //create a new book object and bind it to UI form using ngModel
   
  }
}
