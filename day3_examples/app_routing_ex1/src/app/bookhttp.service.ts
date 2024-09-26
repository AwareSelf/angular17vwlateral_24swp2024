import { EventEmitter, Injectable } from '@angular/core';
import { Book } from './model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
 })
export class BookHttpService {

  bookarr:Book[];
  //addbookevent:EventEmitter<Book>;

  //step3
  httpoptions =  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
   }
   serverUrl:string;

  constructor(private http:HttpClient) {
    this.bookarr = [];
  //  this.bookarr.push(new Book(2,"React",2000));
   // this.addbookevent = new EventEmitter<Book>();
   this.serverUrl = "http://localhost:5000"; //step2
   }

   addNewBook(book:Book):Observable<Book>
   {
      console.log(book.id+","+book.bkname+","+book.bkprice);
      
      return this.http.post<Book>(this.serverUrl+"/books",book,this.httpoptions);
   
     
   }

   //step 4: make httpclient.delete to delete book with a id and return the observable
   deletebook(id:number):Observable<Book>
   {
    console.log('inside bookhttpservice:delete book with id:'+id);
    return this.http.delete<Book>(this.serverUrl+"/books/"+id);
   }
   getAllBooks():Observable<Book[]>
   {
    //step 4: http get call that returns Observable
     return this.http.get<Book[]>(this.serverUrl+"/books")
   }

   getBook(bid:number):Observable<Book>
   {
      return this.http.get<Book>(this.serverUrl+"/books/"+bid);
   }


}
