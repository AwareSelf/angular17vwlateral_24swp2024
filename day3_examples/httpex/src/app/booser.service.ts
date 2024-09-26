import { Injectable } from '@angular/core';
import { Book } from './book/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BooserService {
 bkarr:Book[];
 serverUrl:string;

 httpoptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    })
 }

  constructor(private http:HttpClient) {
    this.bkarr=[];
    this.serverUrl="http://localhost:5000"
   }

  addbook(b:Book)
  {
    //push it to backend server
   
    this.http.post<Book>(this.serverUrl+"/books",b,this.httpoptions).subscribe(()=>{
      console.log('post successful');
      this.bkarr.push(b);
    });

    
  }

  getAllBooks():Observable<Book[]>
  {
   return  this.http.get<Book[]>(this.serverUrl+"/books");
   
 
  }
}
