import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent implements OnInit {

  bookarr:Book[];

  constructor(private bookser:BookService)
  {
    this.bookarr = this.bookser.getAllBooks();
   
  }

  ngOnInit(): void {
    this.bookser.addbookevent.subscribe(book=>{
      this.bookarr.push(book);
    })
  }



  listallbooks():Book[]
  {
    return this.bookarr = this.bookser.getAllBooks();
  }

}
