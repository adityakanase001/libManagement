import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-membooks',
  templateUrl: './membooks.component.html',
  styleUrls: ['./membooks.component.css']
})
export class MembooksComponent implements OnInit {

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
