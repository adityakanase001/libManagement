import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {

  books:any;
  constructor(public service: DataService)
   { 
    this.Books();
   }

  ngOnInit() {
  }

  Books() {
    this.service.getBooks().subscribe((result)=>{
      console.log(result);
      this.books = result;
    },(error)=>{
      console.log(error)
    }
    )
  }

}
