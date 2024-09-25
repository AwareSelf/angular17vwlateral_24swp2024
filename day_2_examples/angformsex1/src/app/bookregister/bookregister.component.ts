import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Book } from "../model/Book";

@Component({
    selector: 'app-bookregister',
    standalone: true,
    imports: [FormsModule,CommonModule],
    templateUrl: './bookregister.component.html',
    styleUrl: './bookregister.component.css'
  })
  export class BookRegisterComponent {
    book:Book;

    constructor()
    {
        this.book = new Book(1,"Angular",5000);
    }

    addbook(bookform:any):void
    {
        console.log('book form submitted!');
        console.log(bookform);
        console.log(bookform.value);
        console.log(this.book);

        //this.bookser.addbook(this.book);
        bookform.reset();
    }
  }