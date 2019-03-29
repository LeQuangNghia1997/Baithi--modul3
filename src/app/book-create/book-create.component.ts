import { Component, OnInit } from '@angular/core';
import {IBook} from '../Model/book';
import {BookService} from '../book/book.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.sass']
})
export class BookCreateComponent implements OnInit {
  bookList: IBook[] = [];
  inputControl = new FormControl();
  book: IBook;
  constructor(private bookService: BookService,
  ) { }
  ngOnInit() {
  }
  create() {
    const book: Partial<IBook> = {
      name: this.inputControl.value,
    };
    this.bookService.createBook(book).subscribe(next => {
      this.bookList.unshift(next);
      this.inputControl.setValue('');
      return this.ngOnInit();
    });
  }
}




