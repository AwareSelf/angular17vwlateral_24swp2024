import { Component } from '@angular/core';
import { Book } from '../model/book';
import { ChangeText } from '../changetext.directive';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [ChangeText],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  bookarr:Book[];
  book:Book;

  constructor()
  {
    this.bookarr = [];
    this.bookarr.push(new Book(1,"angular",100));
    this.book = new Book(2,'React',2000);
   
  }

  addBook(bid:string,bname:string,bprice:string):void
  {
    console.log(bid);
    console.log(bname);
    console.log(bprice);
    this.bookarr.push(new Book(+bid,bname,+bprice));
  }




}
