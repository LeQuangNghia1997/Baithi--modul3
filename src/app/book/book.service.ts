import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly URL = ('http://localhost:8081/books');

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.URL);
  }
  createBook(book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(`${this.URL}`, book);
  }
}
