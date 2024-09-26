import { Component, OnInit,OnDestroy} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';
import { BookHttpService } from '../bookhttp.service';

@Component({
  selector: 'app-listbooks',
  standalone: true,
  imports: [],
  templateUrl: './listbooks.component.html',
  styleUrl: './listbooks.component.css'
})
export class ListbooksComponent implements OnInit,OnDestroy {

  bookarr!:Book[];
  deletesuccess:string;

  //constructor(private bookser:BookService)
  constructor(private bookser:BookHttpService)
  {
    console.log('listbook comp getting created and fetching bookarray from service..');

    this.deletesuccess = '';
    //step 5:subscribe to http.get observable and collect bookarray in callback
     this.bookser.getAllBooks().subscribe(
      (books:Book[])=>{

      this.bookarr = books;
     },
     (error)=>{
       console.log('http listbook call failed:error message:'+error.message);
     });
   
  }
 

  ngOnInit(): void {
    console.log('listbooks comp init called')
    /*
    this.bookser.addbookevent.subscribe(book=>{
      this.bookarr.push(book);
    })
      */
  }



  listallbooks()
  {
    this.bookser.getAllBooks().subscribe({next:(books:Book[])=>{

      this.bookarr = books;
     },
     error:(error)=>{
      console.log('http get error wile retieveing books:error message'+error.message);
     }
    });
  }

  //step 2
  deletebook(id:number)
  {
    console.log('delete book with id:'+id);

    //step3: make deletebook passing book id to bookhttp service and subcribe to it
    this.bookser.deletebook(id).subscribe({
      next:()=>{
      /*
      step 5: in success callback of delete -
       1) call listallbooks to fetch bookarray from      
       from bookhttpservice to get bookarray with deleted book entry missing
       2) assign a delete success message and show it in UI using interpolation syntax
      */
           this.listallbooks();
           this.deletesuccess = "book with id:"+id+"deleted successfully";
          
    },
    error:(error)=>{
      console.log(error);
      console.log('http call failed:error message:'+error.message);
      this.deletesuccess = "book with id:"+id+"not able to delete successfully, http error:"+error.message;
    }})
  }

  ngOnDestroy(): void {
    console.log('ListBooks comp abt to be destroyed and unloaded..');
  }

}
