import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-searchbook',
  standalone: true,
  imports: [],
  templateUrl: './searchbook.component.html',
  styleUrl: './searchbook.component.css'
})
export class SearchbookComponent {
  errmsg?:string;
  bkid?:number;
  book!:Book|undefined;
  
  constructor(private route:ActivatedRoute,private bookser:BookService)
  {
     
      console.log('searchbook component constructor called...');
      //asynchronous call //Observable
       this.route.params.subscribe( params => {
           if(params['id'])
           {
               this.dosearch(params['id']);

           }
           else
           {
               this.errmsg=='please provide id!!';
           }

       });
 }


 dosearch(id:number)
 {
  console.log('id value is:'+id);
  this.bkid = id;
  //search for book with bookid bkid in angualr boo.service -> searchbook method
   this.book = this.bookser.getBook(this.bkid);
 }


}
