import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../model/book';
import { BookHttpService } from '../bookhttp.service';

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
  
 // constructor(private route:ActivatedRoute,private bookser:BookService)
 constructor(private route:ActivatedRoute,private bookser:BookHttpService)
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
    this.bookser.getBook(this.bkid).subscribe((book:Book)=>{

      if(book)
      {
      console.log('book with bookid:'+this.bkid+"retrieved successfully");
      this.book = book;
      }
      else
      {
        console.log('book with bookid'+this.bkid+'not found');
      }
    },()=>{
      console.log('http search book call failed');
    })
 }


}
