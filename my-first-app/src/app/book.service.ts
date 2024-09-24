import { Injectable } from '@angular/core';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookarr:Book[];

  constructor() {
    this.bookarr = [];
    this.bookarr.push(new Book(2,"React",2000));
   }

   addNewBook(book:Book):void
   {
      console.log(book.bkid+","+book.bkname+","+book.bkprice);
      this.bookarr.push(book);
      console.log("book length after adding new book:"+this.bookarr.length);
   }
   getAllBooks():Book[]
   {
      return this.bookarr.slice();
   }
}
