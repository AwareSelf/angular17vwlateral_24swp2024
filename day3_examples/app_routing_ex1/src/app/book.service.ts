import { EventEmitter, Injectable } from '@angular/core';
import { Book } from './model/book';

@Injectable({
   providedIn: 'root'
 })
export class BookService {

  bookarr:Book[];
  //addbookevent:EventEmitter<Book>;

  constructor() {
    this.bookarr = [];
    this.bookarr.push(new Book(2,"React",2000));
   // this.addbookevent = new EventEmitter<Book>();
   }

   addNewBook(book:Book):void
   {
      console.log(book.id+","+book.bkname+","+book.bkprice);
      this.bookarr.push(book);
      console.log("book length after adding new book:"+this.bookarr.length);
     
   }
   getAllBooks():Book[]
   {
      return this.bookarr.slice();
   }

   getBook(bid:number):Book|undefined
   {
     return this.bookarr.find(book=>book.id==bid);
   }


}
