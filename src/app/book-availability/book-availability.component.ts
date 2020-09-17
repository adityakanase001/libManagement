import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-availability',
  templateUrl: './book-availability.component.html',
  styleUrls: ['./book-availability.component.css']
})
export class BookAvailabilityComponent implements OnInit {

  books:any;
  // applicants: any = { "subjects":{"s1":"","s2":"sci", "s3":"sci"},
  //                     "eduQualifications":{}}
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
