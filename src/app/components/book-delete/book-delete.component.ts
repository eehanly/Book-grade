import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})

export class BookDeleteComponent implements OnInit {
  


  bookId: number;
  book: any = new Book();
  
  constructor(private service: BookService, public router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = +params["id"];

this.service.getOne(this.bookId).subscribe(res => {
  this.book = res;
})

    })
  }

  deleteBook(id){
    this.service.deleteBook(id).subscribe(() => {

      this.router.navigateByUrl('/');
  });

   
  
   }

}
