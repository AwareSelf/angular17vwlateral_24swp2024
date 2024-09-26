import { Component, OnInit,OnDestroy} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-listbooks',
  standalone: true,
  imports: [],
  templateUrl: './listbooks.component.html',
  styleUrl: './listbooks.component.css'
})
export class ListbooksComponent implements OnInit,OnDestroy {

  bookarr:Book[];

  constructor(private bookser:BookService)
  {
    this.bookarr = this.bookser.getAllBooks();
   
  }
 

  ngOnInit(): void {
    console.log('listbooks comp init called')
    this.bookser.addbookevent.subscribe(book=>{
      this.bookarr.push(book);
    })
  }



  listallbooks():Book[]
  {
    return this.bookarr = this.bookser.getAllBooks();
  }

  ngOnDestroy(): void {
    console.log('ListBooks comp abt to be destroyed and unloaded..');
  }

}
