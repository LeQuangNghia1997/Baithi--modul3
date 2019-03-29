import { Component, OnInit } from '@angular/core';
import {IBook} from '../Model/book';
import {FormControl} from '@angular/forms';
import {BookService} from '../book/book.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.sass']
})
export class BooklistComponent implements OnInit {

  bookList: IBook[] = [];
  inputControl = new FormControl();
  book: IBook;
  constructor(private bookService: BookService,
  ) { }
  ngOnInit() {
    this.getAll();
    this.getUnderBook();
  }
  getAll() {
    this.bookService.getAll().subscribe(data => this.bookList = data);
  }
  create() {
    const book: Partial<IBook> = {
      name: this.inputControl.value,
      read: this.inputControl.value
    };
    this.bookService.createBook(book).subscribe(next => {
      this.bookList.unshift(next);
      this.inputControl.setValue('');
      return this.ngOnInit();
    });
  }
  getUnderBook() {
    return this.bookService.getAll().subscribe(datas => { this.bookList = datas.filter(data => data.read !== false ); });
  }}


