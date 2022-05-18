import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  
  newTitle: Book;

  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
    this.newTitle = new Book();
  }

  createBook(){
    this.service.createBook(this.newTitle).subscribe(() => {
      this.router.navigateByUrl('/');
    });
    

  }

}
