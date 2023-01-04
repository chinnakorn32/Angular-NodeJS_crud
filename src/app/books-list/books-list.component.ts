import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  Books: any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe((res) => {
      console.log(res);
      this.Books = res;
    })
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Are you sure?')) {
      this.crudService.DeleteBook(id).subscribe((res) => {
        //(i,0) ไม่ต้องลบ
        //(i,1) ไม่ 1 ค่า
        //(i,2) ไม่ 2 ค่า
        this.Books.splice(i, 1);
      })
    }
  }
}
 