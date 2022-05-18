import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {  

  baseUrl = 'http://localhost:5178/api/Book';


  constructor(private http: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);

  }

  createBook(book: Book){
    return this.http.post(this.baseUrl, book);
  }

  deleteBook(bookId: number){
    return this.http.delete(`${this.baseUrl}/${bookId}`)
  }

  //delete a book (DELETE)
  //component needs to provie the ID
  // deleteBook(bookID: number) :Observable<any>{
  //   return this.http.delete<Book>(`${this.baseUrl}/${bookID}`);
  // }

  getOne(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

}
